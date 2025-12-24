import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full border-b border-[#22262F] bg-background/80 backdrop-blur-xl sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
            AI PAY-LINK™
          </span>
        </Link>
        
        <div className="flex items-center gap-8">
          <Link 
            href="/dashboard" 
            className="text-sm font-medium text-[#CECFD2] hover:text-primary-foreground transition-colors"
          >
            Dashboard
          </Link>
          <Link 
            href="/create" 
            className="text-sm font-medium text-[#CECFD2] hover:text-primary-foreground transition-colors"
          >
            Create
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
