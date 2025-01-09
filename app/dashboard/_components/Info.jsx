"use client";
import { UserDetailContext } from "@/app/_context/UserDetailsContext";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
import React, { useContext } from "react";

function Info() {
  const { userDetail, setUserDetail } = useContext(UserDetailContext);

  return (
    <div>
      <div className="flex justify-between items-center">
        <h2 className="font-bold text-3xl text-primary">
          Hello, {userDetail?.name}
        </h2>
      </div>

      <div className=" flex justify-between items-center mt-6">
        <h2 className="font-bold text-2xl">Dashboard</h2>
        <Link href="/create">
          <Button>+ Create New Logo</Button>
        </Link>
      </div>
    </div>
  );
}

export default Info;
