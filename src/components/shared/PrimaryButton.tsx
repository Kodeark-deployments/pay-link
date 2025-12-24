import React from "react";
import { Button } from "../ui/button";

const PrimaryButton = ({
  type = "button",
  children,
  className = "",
  bg = "bg-linear-to-br from-secondary to-primary hover:from-primary hover:to-secondary",
  onClick,
  ...props
}: {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  width?: string;
  className?: string;
  bg?: string;
  onClick?: () => void;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  return (
    <Button
      className={`text-primary-foreground md:text-lg text-base font-semibold tracking-tight flex items-center justify-center py-3 px-6 rounded-xl transition-colors duration-500 ease-in-out ${bg} ${className}`}
      type={type}
      onClick={onClick}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
