"use client";

import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import Image from "next/image";
import React from "react";

const Header = () => {
  const { user } = useUser();
  return (
    <div className="px-10 lg:px-32 xl:px-48 2xl:px-56 p-4 flex justify-between items-center shadow-sm">
      <Image src={"/logo.svg"} alt="logo" width={180} height={100} />
      <div className="gap-3 flex items-center">
        {user ? (
          <Button variant="outline">Dashboard</Button>
        ) : (
          <Button>Login</Button>
        )}
        <UserButton />
      </div>
    </div>
  );
};

export default Header;
