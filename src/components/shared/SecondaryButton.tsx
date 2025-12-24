import React from "react";
import { Button } from "../ui/button";

const SecondaryButton = ({
  type = "button",
  children,
  className = "",
  onClick,
  wfit=false
}: {
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  wfit?: boolean;
}) => {
  return (
    <Button
      className={`${wfit ? "w-fit" : "md:w-fit w-full"} h-fit text-primary-foreground md:text-lg text-base font-semibold flex items-center justify-center bg-linear-to-br from-secondary to-primary hover:from-primary hover:to-secondary p-0.5 rounded-xl transition-colors duration-500 ease-in-out`}
      type={type}
      onClick={onClick}
    >
      <div
        className={`md:w-fit w-full flex px-6 py-3 items-center justify-center rounded-xl ${className}`}
      >
        {children}
      </div>
    </Button>
  );
};

export default SecondaryButton;
