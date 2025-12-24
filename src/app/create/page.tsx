"use client";

import PrimaryButton from "@/components/shared/PrimaryButton";
import SecondaryButton from "@/components/shared/SecondaryButton";
import PreviewModal from "@/components/shared/PreviewModal";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-out",
    });
  }, []);

  const handleCreate = () => {
    setIsModalOpen(true);
  };

  const handleReset = () => {
    setTitle("");
    setAmount("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="mb-6 sm:mb-8" data-aos="fade-up">
          <h1 className="text-3xl sm:text-4xl font-bold text-primary-foreground mb-2">
            Create Payment Link
          </h1>
          <p className="text-sm sm:text-base text-[#CECFD2]">
            Generate a new AI-powered payment link in seconds
          </p>
        </div>

        <Card 
          className="border-[#22262F] bg-background/50 backdrop-blur-xl"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <CardHeader>
            <CardTitle className="text-xl text-primary-foreground">
              Payment Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2" data-aos="fade-up" data-aos-delay="200">
              <Label htmlFor="title" className="text-[#CECFD2]">
                Payment Title
              </Label>
              <Input
                id="title"
                placeholder="Enter payment title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-transparent border-[#22262F] text-primary-foreground"
              />
            </div>

            <div className="space-y-2" data-aos="fade-up" data-aos-delay="300">
              <Label htmlFor="amount" className="text-[#CECFD2]">
                Amount
              </Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-transparent border-[#22262F] text-primary-foreground"
              />
            </div>

            <div className="space-y-2" data-aos="fade-up" data-aos-delay="400">
              <Label htmlFor="description" className="text-[#CECFD2]">
                Description (Optional)
              </Label>
              <Input
                id="description"
                placeholder="Enter payment description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-transparent border-[#22262F] text-primary-foreground"
              />
            </div>

            <div className="flex flex-col md:flex-row gap-4 pt-4" data-aos="fade-up" data-aos-delay="500">
              <PrimaryButton onClick={handleCreate} className="flex-1">
                Generate Payment Link
              </PrimaryButton>
              <SecondaryButton onClick={handleReset} className="bg-background">
                Reset
              </SecondaryButton>
            </div>
          </CardContent>
        </Card>
      </div>

      <PreviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={title}
        amount={amount}
        description={description}
      />
    </div>
  );
};

export default CreatePage;
