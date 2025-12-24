"use client";

import PrimaryButton from "@/components/shared/PrimaryButton";
import SecondaryButton from "@/components/shared/SecondaryButton";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";

const CreatePage = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  const handleCreate = () => {
    console.log("Creating payment link:", { title, amount, description });
  };

  const handleReset = () => {
    setTitle("");
    setAmount("");
    setDescription("");
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-primary-foreground mb-2">
            Create Payment Link
          </h1>
          <p className="text-[#CECFD2]">
            Generate a new AI-powered payment link in seconds
          </p>
        </div>

        <Card className="border-[#22262F] bg-background/50 backdrop-blur-xl">
          <CardHeader>
            <CardTitle className="text-xl text-primary-foreground">
              Payment Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="text-[#CECFD2]">
                Payment Title
              </Label>
              <Input
                id="title"
                placeholder="Enter payment title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="bg-background border-[#22262F] text-primary-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount" className="text-[#CECFD2]">
                Amount
              </Label>
              <Input
                id="amount"
                type="number"
                placeholder="0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                className="bg-background border-[#22262F] text-primary-foreground"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-[#CECFD2]">
                Description (Optional)
              </Label>
              <Input
                id="description"
                placeholder="Enter payment description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="bg-background border-[#22262F] text-primary-foreground"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <PrimaryButton onClick={handleCreate} className="flex-1">
                Generate Payment Link
              </PrimaryButton>
              <SecondaryButton onClick={handleReset} className="bg-background">
                Reset
              </SecondaryButton>
            </div>
          </CardContent>
        </Card>

        {/* Preview Card */}
        <Card className="border-[#22262F] bg-background/50 backdrop-blur-xl mt-8">
          <CardHeader>
            <CardTitle className="text-xl text-primary-foreground">
              Link Preview
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="p-6 rounded-xl border border-[#22262F] bg-background">
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                {title || "Payment Title"}
              </h3>
              <p className="text-3xl font-bold text-primary mb-4">
                ${amount || "0.00"}
              </p>
              <p className="text-sm text-[#CECFD2]">
                {description || "No description provided"}
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CreatePage;
