"use client";

import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import LookUp from "@/app/_data/LookUp";
import LogoDesign from "@/app/_data/LogoDesign";
import { cn } from "@/lib/utils";

const LogoDesigns = ({ onHandleInputChange, formData }) => {
  const [selectedOption, setSelectedOption] = useState(formData?.design?.title);
  return (
    <div className="my-10">
      <HeadingDescription
        title={LookUp.LogoDesignTitle}
        description={LookUp.LogoDesignDesc}
      />
      <div className="grid grid-cols-2 md:grid-cols-3 gap-10 mt-10">
        {LogoDesign.map((design, index) => (
          <div
            className={cn(
              " p-1 cursor-pointer hover:border-2 border-primary rounded-xl ",
              selectedOption === design.title &&
                "border-2  rounded-lg border-primary"
            )}
            key={index}
            onClick={() => {
              setSelectedOption(design.title);
              onHandleInputChange(design);
            }}
          >
            <img
              src={design.image}
              alt={design.title}
              width={300}
              height={200}
              className="w-full rounded-xl h-[200px] object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoDesigns;
