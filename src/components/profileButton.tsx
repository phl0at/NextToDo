import React from "react";
import Image from "next/image";
import { LogoutLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs";
const ProfileButton = (user: User) => {
  return (
    <>
      <LogoutLink>Log Out</LogoutLink>
      <button>
        <Image
          src={user.picture ? user.picture : ""}
          alt="profile image"
          width={50}
          height={50}
        />
      </button>
    </>
  );
};

export default ProfileButton;
