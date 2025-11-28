import { ShieldCheck, Truck } from "lucide-react";

const TrustBadges = () => {
  return (
    <section className="bg-secondary py-16 sm:py-20 lg:py-24">
      <div className="container">
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2">
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-accent">
              <ShieldCheck className="h-12 w-12 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary">
                Secure payment
              </h3>
              <p className="mt-2 text-base text-muted-foreground">
                Shop confidently with a secure payment gateway
              </p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-6 text-center lg:flex-row lg:text-left">
            <div className="flex h-24 w-24 flex-shrink-0 items-center justify-center rounded-full bg-accent">
              <Truck className="h-12 w-12 text-accent-foreground" />
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-primary">
                Free delivery
              </h3>
              <p className="mt-2 text-base text-muted-foreground">
                Free delivery on all orders above ₹399
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;