import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FeatureCard = ({ icon: Icon, title, description }: FeatureCardProps) => {
  return (
    <Card className="relative cursor-pointer border-[#22262F] bg-background/50 backdrop-blur-xl hover:border-primary/50 transition-all duration-300 group overflow-hidden">
      {/* Gradient Background Effect */}
      <div className="absolute inset-0 bg-linear-to-br from-primary/5 via-transparent to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
      {/* Shine Effect */}
      <div className="absolute inset-0 bg-linear-to-r from-transparent via-primary/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      
      <CardContent className="relative p-6 z-10">
        <div className="mb-4 w-12 h-12 rounded-xl bg-linear-to-br from-primary to-secondary p-0.5 group-hover:scale-110 transition-transform duration-300">
          <div className="w-full h-full rounded-xl bg-background flex items-center justify-center">
            <Icon className="w-6 h-6 text-primary" />
          </div>
        </div>
        
        <h3 className="text-xl font-semibold text-primary-foreground mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-[#CECFD2] text-sm leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
