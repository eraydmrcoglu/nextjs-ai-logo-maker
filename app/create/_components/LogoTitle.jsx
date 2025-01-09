"use client";
import React, { useState } from "react";
import HeadingDescription from "./HeadingDescription";
import LookUp from "@/app/_data/LookUp";
import { useSearchParams } from "next/navigation";

const LogoTitle = ({ onHandleInputChange, formData }) => {
  const [title, setTitle] = useState(formData?.title);
  return (
    <div className="my-10">
      <HeadingDescription
        title={LookUp.LogoTitle}
        description={LookUp.LogoTitleDesc}
      />
      <input
        placeholder={LookUp.InputTitlePlaceholder}
        className="p-4 border rounded-lg mt-5 w-full "
        defaultValue={title}
        onChange={(e) => onHandleInputChange(e?.target.value)}
      />
    </div>
  );
};

export default LogoTitle;
