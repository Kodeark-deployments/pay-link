import Image from "next/image";
import Link from "next/link";

const Tag = () => {
  return (
    <div className="rounded-4xl px-4 sm:px-6 py-2 sm:py-3 border-2 border-[#FFFFFF]/20 bg-[#FFFFFF]/10 flex items-center justify-center gap-3 sm:gap-6">
      <Link href={""} target="_blank" className="hover:scale-110 transition-transform">
        <Image src="/Social/x.svg" alt="x" width={20} height={20} className="sm:w-6 sm:h-6" priority />
      </Link>
      <Link href={""} target="_blank" className="hover:scale-110 transition-transform">
        <Image
          src="/Social/telegram.svg"
          alt="telegram"
          width={20}
          height={20}
          className="sm:w-6 sm:h-6"
          priority
        />
      </Link>
      <Link href={""} target="_blank" className="hover:scale-110 transition-transform">
        <Image
          src="/Social/discord.svg"
          alt="discord"
          width={20}
          height={20}
          className="sm:w-6 sm:h-6"
          priority
        />
      </Link>
      <Link href={""} target="_blank" className="hover:scale-110 transition-transform">
        <Image
          src="/Social/instagram.svg"
          alt="instagram"
          width={20}
          height={20}
          className="sm:w-6 sm:h-6"
          priority
        />
      </Link>
    </div>
  );
};

export default Tag;
