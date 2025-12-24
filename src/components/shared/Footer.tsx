import Link from "next/link";
import { Github, Twitter, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full px-4 sm:px-6 py-6 border-t border-[#22262F] bg-transparent backdrop-blur-xl flex flex-col md:flex-row items-center md:justify-between gap-4 z-10">
      <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-lg font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            AI PAY-LINK™
          </span>
        </Link>
        <span className="text-xs sm:text-sm text-[#94979C] tracking-tight">
          © 2025 AI PAY-LINK. All rights reserved.
        </span>
      </div>

      <nav className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
        <Link href="/dashboard" className="text-sm font-medium text-[#CECFD2] hover:text-primary transition-colors">
          Dashboard
        </Link>
        <Link href="/create" className="text-sm font-medium text-[#CECFD2] hover:text-primary transition-colors">
          Create
        </Link>
        <Link href="/" className="text-sm font-medium text-[#94979C] hover:text-primary transition-colors">
          Pricing
        </Link>
      </nav>

      <div className="flex items-center gap-3">
        <a href="https://github.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-[#22262F]/20 transition-colors">
          <Github className="w-5 h-5 text-primary" />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" className="p-2 rounded-lg hover:bg-[#22262F]/20 transition-colors">
          <Twitter className="w-5 h-5 text-primary" />
        </a>
        <a href="mailto:hello@aipaylink.example" className="p-2 rounded-lg hover:bg-[#22262F]/20 transition-colors">
          <Mail className="w-5 h-5 text-primary" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
