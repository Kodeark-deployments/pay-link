import Link from "next/link";
import PrimaryButton from "../shared/PrimaryButton";

const CTASection = () => {
  return (
    <div className="w-full py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-4xl border-2 border-primary bg-background overflow-hidden">
          {/* Background Gradient Effects */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-primary rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-secondary rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
          
          {/* Content */}
          <div className="relative z-10 py-16 px-8 md:px-16 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-[#CECFD2] text-lg md:text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AI PAY-LINK™ to streamline their payment processes
            </p>
            
            <Link href="/create" className="inline-block">
              <PrimaryButton className="text-lg px-8 py-4">
                Create Your First Link
              </PrimaryButton>
            </Link>
            
            <p className="text-[#CECFD2] text-sm mt-6">
              No credit card required • Setup in 2 minutes • Free trial
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
