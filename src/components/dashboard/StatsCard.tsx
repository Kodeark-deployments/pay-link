import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
}

const StatsCard = ({ title, value, description }: StatsCardProps) => {
  return (
    <Card className="border-[#22262F] bg-background/50 backdrop-blur-xl hover:border-primary/50 transition-all duration-300">
      <CardHeader>
        <CardTitle className="text-sm font-medium text-[#CECFD2]">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="text-3xl font-bold text-primary-foreground mb-2">
          {value}
        </div>
        <p className="text-xs text-secondary">{description}</p>
      </CardContent>
    </Card>
  );
};

export default StatsCard;
