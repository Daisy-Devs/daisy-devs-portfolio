import React, { SetStateAction } from "react";

type HeroProps = {
  currency: "INR" | "USD";
  setCurrency: React.Dispatch<React.SetStateAction<"INR" | "USD">>;
};
const Hero: React.FC<HeroProps> = ({ currency, setCurrency }) => {
  return (
    <section className="mx-auto px-margin-desktop text-center my-25 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] rounded-full bg-primary-container opacity-30 blur-[120px] -z-10"></div>
      <div className="inline-block px-4 py-1 bg-tertiary-container text-on-tertiary-container rounded-full font-geist-sans text-label-md mb-6">
        Transparent Budgets
      </div>
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 bg-surface-container border-2 border-on-surface rounded-full drop-border">
          <button
            id="toggle-inr"
            onClick={(e) => {
              setCurrency("INR");
            }}
            className={"px-6 py-2 rounded-full font-bricolage-grotesque transition-all hover:cursor-pointer"+
            (currency === "INR" ? " bg-secondary text-on-secondary" : " text-on-surface-variant")
            }
          >
            ₹ INR
          </button>
          <button
            id="toggle-usd"
            onClick={(e) => {
              setCurrency("USD");
            }}
            className={"px-6 py-2 rounded-full font-bricolage-grotesque text-label-md transition-all hover:cursor-pointer"+
            (currency === "USD" ? " bg-secondary text-on-secondary" : " text-on-surface-variant")}
          >
            $ USD
          </button>
        </div>
      </div>
      <h1 className="font-bricolage-grotesque font-bold text-5xl mb-6">
        Plans built to <span className="text-secondary italic">bloom</span>.
      </h1>
      <p className="font-geist-sans text-xl text-on-surface-variant max-w-2xl mx-auto">
        From simple seedlings to enterprise forests, we have the perfect digital
        ecosystem for your growth.
      </p>
    </section>
  );
};

export default Hero;
