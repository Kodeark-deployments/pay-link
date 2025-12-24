"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import { useEffect } from "react";

interface PreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  amount: string;
  description: string;
}

const PreviewModal = ({ isOpen, onClose, title, amount, description }: PreviewModalProps) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center px-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-background/80 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div
        className="relative w-full max-w-2xl mb-0 sm:mb-0 animate-slide-up"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <Card className="border-[#22262F] bg-background backdrop-blur-xl shadow-2xl">
          <CardHeader className="flex flex-row items-center justify-between p-4 sm:p-6">
            <CardTitle className="text-xl sm:text-2xl text-primary-foreground">
              Payment Link Preview
            </CardTitle>
            <button
              onClick={onClose}
              className="p-2 rounded-lg hover:bg-[#22262F]/50 transition-colors"
            >
              <X className="w-5 h-5 text-[#CECFD2]" />
            </button>
          </CardHeader>
          <CardContent className="p-4 sm:p-6">
            <div className="p-6 sm:p-8 rounded-xl border-2 border-primary/30 bg-linear-to-br from-primary/5 to-secondary/5">
              <div className="text-center space-y-3 sm:space-y-4">
                <h3 className="text-xl sm:text-2xl font-bold text-primary-foreground">
                  {title || "Payment Title"}
                </h3>
                <p className="text-3xl sm:text-5xl font-bold bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
                  ${amount || "0.00"}
                </p>
                <p className="text-sm sm:text-base text-[#CECFD2] max-w-md mx-auto">
                  {description || "No description provided"}
                </p>
                <div className="pt-3 sm:pt-4 flex flex-col gap-2">
                  <div className="p-3 rounded-lg bg-background/80 border border-[#22262F]">
                    <p className="text-xs sm:text-sm text-[#94979C] mb-1">Payment Link</p>
                    <p className="text-primary font-mono text-xs sm:text-sm break-all">
                      https://aipaylink.app/pay/{Math.random().toString(36).substring(7)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PreviewModal;
