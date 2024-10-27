import Image from "next/image";

type User = {
  picture?: string | null; // Define `picture` as optional and nullable
};

type ProfileButtonProps = {
  user: User;
};

export default function ProfileButton({ user }: ProfileButtonProps) {
  return (
    <button>
      {user.picture ? (
        <Image src={user.picture} width={50} height={50} alt="User profile picture" />
      ) : (
        <span>Profile</span> // Fallback in case picture is missing
      )}
    </button>
  );
}
