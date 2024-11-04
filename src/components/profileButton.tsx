import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { useState } from "react";

export default function ProfileButton({ user }: { user: User }) {
  const [display, setDisplay] = useState(false);

  return (
    <>
      <button onClick={() => setDisplay((prev) => !prev)}>
        <Image
          className="rounded-full h-[35px] w-[35px]"
          src={
            user?.picture
              ? user?.picture
              : "https://static.vecteezy.com/system/resources/thumbnails/020/765/399/small_2x/default-profile-account-unknown-icon-black-silhouette-free-vector.jpg"
          }
          width={55}
          height={55}
          alt="User profile picture"
        />
      </button>
      <div className={display ? "absolute right-0 top-10 w-20 h-20" : "w-0 h-0 absolute"}>
        <LoginLink>Log In</LoginLink>
        <LogoutLink>Log Out</LogoutLink>
      </div>
    </>
  );
}
