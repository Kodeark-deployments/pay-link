import FeatureCard from "./FeatureCard";
import { 
  Sparkles, 
  Zap, 
  Shield, 
  BarChart3, 
  Globe, 
  Palette 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Intelligence",
      description:
        "Leverage advanced AI to create smart payment links that adapt to your customers' preferences and behavior.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Generate payment links in seconds. No complex setup, no waiting. Just instant, professional payment solutions.",
    },
    {
      icon: Shield,
      title: "Secure & Reliable",
      description:
        "Bank-level encryption and security protocols ensure your transactions are always protected and trustworthy.",
    },
    {
      icon: BarChart3,
      title: "Real-Time Analytics",
      description:
        "Track payments, monitor trends, and gain insights with comprehensive analytics and reporting tools.",
    },
    {
      icon: Globe,
      title: "Global Payments",
      description:
        "Accept payments from anywhere in the world with multi-currency support and international payment methods.",
    },
    {
      icon: Palette,
      title: "Fully Customizable",
      description:
        "Brand your payment links with custom colors, logos, and messaging to match your business identity.",
    },
  ];

  return (
    <div className="w-full py-12 sm:py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-3 sm:mb-4">
            Powerful Features for Modern Payments
          </h2>
          <p className="text-[#CECFD2] text-base sm:text-lg md:text-xl max-w-2xl mx-auto px-4">
            Everything you need to create, manage, and track payment links with AI-powered efficiency
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
