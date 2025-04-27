"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";
import { useEffect, useState } from "react";

const LeftSideBar = () => {
  const { user, isLoaded } = useUser();

  const [loading, setLoading] = useState(true);

  const [userData, setUserData] = useState({});

  const getUser = async () => {
    const response = await fetch(`/api/user/${user.id}`);
    const data = await response.json();
    setUserData(data);
    setLoading(false);
  };

  useEffect(() => {
    if (user) {
      getUser();
    }
  }, [user]);

  return (
    <div style={{width:'300px'}} className="h-screen left-0 top-0 sticky overflow-auto px-5 py-6 flex flex-col gap-6 max-md:hidden 2xl:w-[350px] pr-20 custom-scrollbar w-[300px]">
      <Link href="/">
        <Image src="/assets/logo.png" alt="logo" width={200} height={200} />
      </Link>

      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2 items-center text-light-1">
          {/* <Link href={`/profile/${userData._id}/posts`}>
            
          </Link> */}
          <p className="text-small-bold">
            {userData?.firstName} {userData?.lastName}
          </p>
        </div>
        <div  style={{justifyContent:'space-between'}} className="flex text-light-1 justify-between gap-3">
          <div className="flex flex-col items-center">
            <p  className="text-base-bold">{userData?.posts?.length}</p>
            <p className="text-tiny-medium">Posts</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">{userData?.followers?.length}</p>
            <p className="text-tiny-medium">Followers</p>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-base-bold">{userData?.following?.length}</p>
            <p className="text-tiny-medium">Following</p>
          </div>
        </div>
      </div>

      <hr />

      <Menu />

      <hr />

      <div className="flex gap-4 items-center">
        <UserButton appearance={{ baseTheme: dark }} afterSignOutUrl="/sign-in"/>
        <p className="text-light-1 text-body-bold">Manage Account</p>
      </div>
    </div>
  );
};

export default LeftSideBar;