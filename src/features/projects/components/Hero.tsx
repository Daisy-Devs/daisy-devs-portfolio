import React from "react";

const Hero = () => {
  return (
    <section className="relative pt-40 pb-30 overflow-hidden">
      <div className="px-margin-desktop mx-auto relative z-10">
        <div className="max-w-2xl">
          <h1 className="font-bricolage-grotesque font-bold text-6xl text-on-surface mb-6">
            Our Digital <br />
            <span className="text-secondary italic">Garden</span>
          </h1>
          <p className="font-nunito-sans text-xl text-on-surface-variant mb-12">
            Meticulously crafted solutions where high-end technical rigor meets
            organic beauty. Each project is a bloom in our growing ecosystem of
            creative code.
          </p>
          <div className="flex gap-4">
            <span className="bg-primary-container text-on-primary-container px-4 py-1 rounded-lg font-geist-sans text-xs border border-outline-variant">
              Web Apps
            </span>
            <span className="bg-secondary-container text-on-secondary-container px-4 py-1 rounded-lg font-geist-sans text-xs border border-outline-variant">
              E-commerce
            </span>
            <span className="bg-tertiary-container text-on-tertiary-container px-4 py-1 rounded-lg font-geist-sans text-xs border border-outline-variant">
              Mobile Apps
            </span>
          </div>
        </div>
      </div>
      <div className="absolute right-50 top-60 opacity-10 pointer-events-none select-none">
        <img src={"./svg/flower.svg"} alt="Flower" />
      </div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-primary-container"></div>
    </section>
  );
};

export default Hero;
