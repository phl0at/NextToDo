import Image from "next/image";

type ProfileButtonProps = {
  user: User;
};

export default function ProfileButton({ user }: ProfileButtonProps) {
  return (
    <button>
      <Image
        className="rounded-full h-[37px] w-[37px]"
        src={user?.picture ? user?.picture : ""}
        width={55}
        height={55}
        alt="User profile picture"
      />
    </button>
  );
}
