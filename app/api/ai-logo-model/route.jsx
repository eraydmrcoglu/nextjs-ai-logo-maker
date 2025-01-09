import { AILogoPrompt } from "@/configs/AiModel";
import { db } from "@/configs/FirebaseConfig";
import axios from "axios";
import { doc, setDoc, updateDoc, arrayUnion, getDoc } from "firebase/firestore";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { prompt, email, title, desc } = await req.json();

  try {
    const AiPromptResult = await AILogoPrompt.sendMessage(prompt);

    const AIPrompt = JSON.parse(AiPromptResult.response.text()).prompt;

    const response = await axios.post(
      "https://api-inference.huggingface.co/models/strangerzonehf/Flux-Midjourney-Mix2-LoRA",
      AIPrompt,
      {
        headers: {
          Authorization: "Bearer " + process.env.HUGGING_FACE_API_KEY,
          "Content-Type": "application/json",
        },
        responseType: "arraybuffer",
      }
    );

    // Convert the image buffer to Base64
    const buffer = Buffer.from(response.data, "binary");
    const base64Image = buffer.toString("base64");
    const base64ImageWithMime = `data:image/png;base64,${base64Image}`;

    // Add the logo data to the user's document in Firebase
    const logoData = {
      image: base64ImageWithMime,
      title: title,
      desc: desc,
      id: Date.now(),
    };

    const userDocRef = doc(db, "users", email);

    // Check if the user document exists
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      // Create the document if it doesn't exist
      await setDoc(userDocRef, { logos: [logoData] });
    } else {
      // Update the document if it exists
      await updateDoc(userDocRef, {
        logos: arrayUnion(logoData),
      });
    }

    return NextResponse.json({
      image: base64ImageWithMime,
    });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ error: error.message });
  }
}
