import Image from "next/image";
import React from "react";
import PrimaryButton from "../shared/PrimaryButton";
import SecondaryButton from "../shared/SecondaryButton";
import Tag from "./Tag";
import Link from "next/link";

const Hero = ({
  setShowPopupScreen,
}: {
  setShowPopupScreen: (show: boolean) => void;
}) => {
  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <div className="absolute -top-5 -left-10 w-[240px] h-[240px] bg-primary rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute -bottom-5 -right-10 w-[240px] h-[240px] bg-primary rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="w-full lg:py-[96px] py-[64px] px-4 md:px-6 flex flex-col items-center justify-center rounded-4xl border-2 border-primary relative z-10 overflow-hidden bg-background">
        <Image
          src="/Home/hero-bg.svg"
          alt="Solana Memecoin Prop Trading Hero Background Animation"
          width={1440}
          height={800}
          className="absolute top-0 left-0 z-0 w-full h-full object-cover object-top-right pointer-events-none"
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1280px) 1440px, 100vw"
        />
        <div className="w-full h-full flex flex-col items-center md:gap-8 gap-6 justify-center z-10">
          <Tag />
          <h1 className="md:text-6xl text-5xl font-semibold text-primary-foreground tracking-tight text-center leading-[1.2]">
            AI PAY-LINK™ — Smart Payment Links Powered by AI
          </h1>
          <p className="text-[#CECFD2] md:text-xl text-lg font-normal text-center tracking-tight md:w-[60%] w-full">
            Create intelligent payment links in seconds. Get paid faster with AI-powered payment solutions.
          </p>
          <div className="w-full flex items-center justify-center md:flex-row flex-col-reverse md:gap-4 gap-2 mt-6">
            <Link href="/dashboard" className="md:w-fit w-full">
              <SecondaryButton className="bg-background w-full">
                View Dashboard
              </SecondaryButton>
            </Link>
            <Link href="/create" className="md:w-fit w-full">
              <PrimaryButton
                onClick={() => setShowPopupScreen(true)}
                className="md:w-fit w-full"
              >
                <div className="flex items-center gap-2">
                  <Image
                    src="/Social/zap-fast.svg"
                    alt="zap-fast"
                    width={24}
                    height={24}
                  />
                  Create Payment Link
                </div>
              </PrimaryButton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
