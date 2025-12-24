import Link from "next/link";
import PrimaryButton from "../shared/PrimaryButton";

const CTASection = () => {
  return (
    <div className="w-full py-12 sm:py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl sm:rounded-3xl md:rounded-4xl border-2 border-primary bg-background overflow-hidden">
          {/* Background Gradient Effects */}
          <div className="absolute top-0 left-0 w-40 h-40 sm:w-64 sm:h-64 bg-primary rounded-full blur-3xl opacity-20 -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 right-0 w-40 h-40 sm:w-64 sm:h-64 bg-secondary rounded-full blur-3xl opacity-20 translate-x-1/2 translate-y-1/2" />
          
          {/* Content */}
          <div className="relative z-10 py-10 sm:py-12 md:py-16 px-6 sm:px-8 md:px-16 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-foreground mb-3 sm:mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-[#CECFD2] text-base sm:text-lg md:text-xl mb-6 sm:mb-8 max-w-2xl mx-auto">
              Join thousands of businesses already using AI PAY-LINK™ to streamline their payment processes
            </p>
            
            <Link href="/create" className="inline-block w-full sm:w-auto">
              <PrimaryButton className="text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                Create Your First Link
              </PrimaryButton>
            </Link>
            
            <p className="text-[#CECFD2] text-xs sm:text-sm mt-4 sm:mt-6">
              No credit card required • Setup in 2 minutes • Free trial
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
