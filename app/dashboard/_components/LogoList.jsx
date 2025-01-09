"use client";

import { UserDetailContext } from "@/app/_context/UserDetailsContext";
import { db } from "@/configs/FirebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";

function LogoList() {
  const { userDetail } = useContext(UserDetailContext); // Assuming userDetail contains the user email.
  const [logoList, setLogoList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (userDetail) {
      GetUserLogos();
    }
  }, [userDetail]);

  const GetUserLogos = async () => {
    setLoading(true);
    try {
      const userDocRef = doc(db, "users", userDetail?.email);
      const userDoc = await getDoc(userDocRef);

      if (userDoc.exists() && userDoc.data()?.logos) {
        setLogoList(userDoc.data().logos);
      } else {
        console.log("No logos found for this user.");
        setLogoList([]);
      }
    } catch (error) {
      console.error("Error fetching logos:", error);
    } finally {
      setLoading(false);
    }
  };

  const ViewLogo = (image) => {
    const imageWindow = window.open();
    imageWindow.document.write(`<img src="${image}" alt="Base64 Image" />`);
  };

  return (
    <div className="mt-10">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {loading ? (
          [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="bg-slate-200 animate-pulse rounded-xl w-full h-[200px]"
            ></div>
          ))
        ) : logoList.length > 0 ? (
          logoList.map((logo, index) => (
            <div
              key={index}
              className="hover:scale-105 transition-all cursor-pointer"
              onClick={() => ViewLogo(logo?.image)}
            >
              <Image
                src={logo?.image}
                width={400}
                height={200}
                className="w-full rounded-xl"
                alt={logo?.title}
              />
              <h2 className="text-center text-lg font-medium mt-2">
                {logo?.title}
              </h2>
              <p className="text-sm text-gray-500 text-center">{logo?.desc}</p>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No logos found. Create some to see them here!
          </p>
        )}
      </div>
    </div>
  );
}

export default LogoList;
