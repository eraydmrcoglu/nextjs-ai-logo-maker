import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "ai-logo-maker-6cc1e.firebaseapp.com",
  projectId: "ai-logo-maker-6cc1e",
  storageBucket: "ai-logo-maker-6cc1e.firebasestorage.app",
  messagingSenderId: "78184176083",
  appId: "1:78184176083:web:dee0dd608a509c1457f726",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);