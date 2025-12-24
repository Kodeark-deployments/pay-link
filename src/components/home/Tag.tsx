import Image from "next/image";
import Link from "next/link";

const Tag = () => {
  return (
    <div className="rounded-4xl px-6 py-3 border-2 border-[#FFFFFF]/20 bg-[#FFFFFF]/10 flex items-center justify-center gap-6">
      <Link href={""} target="_blank">
        <Image src="/Social/x.svg" alt="x" width={24} height={24} priority />
      </Link>
      <Link href={""} target="_blank">
        <Image
          src="/Social/telegram.svg"
          alt="telegram"
          width={24}
          height={24}
          priority
        />
      </Link>
      <Link href={""} target="_blank">
        <Image
          src="/Social/discord.svg"
          alt="discord"
          width={24}
          height={24}
          priority
        />
      </Link>
      <Link href={""} target="_blank">
        <Image
          src="/Social/instagram.svg"
          alt="instagram"
          width={24}
          height={24}
          priority
        />
      </Link>
    </div>
  );
};

export default Tag;
