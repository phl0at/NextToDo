import { LoginLink, LogoutLink } from "@kinde-oss/kinde-auth-nextjs";
import Image from "next/image";
import { useState } from "react";
import { useEffect } from "react";
export default function ProfileButton({ user }: { user: User }) {
  const [display, setDisplay] = useState(false);
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (
        !target.closest(".profile-button") &&
        !target.closest(".dropdown-menu")
      ) {
        setDisplay(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);
  return (
    <>
      <button onClick={() => setDisplay((prev) => !prev)}>
        <Image
          className="rounded-full h-[35px] w-[35px] profile-button"
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
      <div
        className={`${
          display ? "h-20 bg-blue-600" : "h-0 "
        } absolute right-2 top-12 w-20 overflow-hidden rounded-md flex flex-col items-start justify-evenly dropdown-menu`}
      >
        <LoginLink>Log In</LoginLink>
        <LogoutLink>Log Out</LogoutLink>
      </div>
    </>
  );
}
