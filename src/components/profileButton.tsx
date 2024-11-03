import Image from "next/image";

type ProfileButtonProps = {
  user: User;
};

export default function ProfileButton({ user }: ProfileButtonProps) {
  return (
    <button>
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
  );
}
