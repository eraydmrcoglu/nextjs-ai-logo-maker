import React from "react";
import HeadingDescription from "./HeadingDescription";
import LookUp from "@/app/_data/LookUp";

function LogoDesc({ onHandleInputChange, formData }) {
  return (
    <div className="my-10">
      <HeadingDescription
        title={LookUp.LogoDescTitle}
        description={LookUp.LogoDescDesc}
      />

      <input
        type="text"
        placeholder={LookUp.LogoDescTitle}
        className="p-4 border rounded-lg mt-5 w-full"
        defaultValue={formData?.desc}
        //value={formData.desc}
        onChange={(e) => onHandleInputChange(e.target.value)}
      />
    </div>
  );
}

export default LogoDesc;
