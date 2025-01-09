"use client";

import React from "react";
import LookUp from "../_data/LookUp";
import { Button } from "@/components/ui/button";
import { SignInButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

const Hero = () => {
  const { user } = useUser();
  return (
    <div className="flex items-center flex-col mt-24 gap-5">
      <h2 className="text-primary text-5xl text-center font-bold">
        {LookUp.HeroHeading}
      </h2>
      <h2 className="text-5xl text-center font-bold">
        {LookUp.HeroSubheading}
      </h2>
      <p className="text-lg text-gray-500 text-center">{LookUp.HeroDesc}</p>
      <div className="flex gap-6 w-full  mt-10 items-center  justify-center">
        {user ? (
          <Link href="/create">
            <Button variant="outline" className="mt-5">
              Create Your Logo
            </Button>
          </Link>
        ) : (
          <SignInButton mode="modal" forceRedirectUrl={"/create"}>
            <Button className="mt-5">Login to Generate</Button>
          </SignInButton>
        )}
      </div>
    </div>
  );
};

export default Hero;
