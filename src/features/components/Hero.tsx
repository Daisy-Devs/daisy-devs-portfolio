import React from "react";
const Hero = () => {
  return (
    <section className="pt-40 px-margin-mobile md:px-margin-desktop mx-auto mb-30 relative overflow-hidden">
      <div className="absolute top-5 -right-10 opacity-90 animate-spin duration-175">
        <img src={"./svg/flower.svg"} alt="Flower" />
      </div>
      <div className="absolute top-30 right-30 opacity-90 animate-pulse duration-175">
        <img src={"./svg/leaf.svg"} alt="Leaf" />
      </div>
      <div className="absolute top-30 right-45 opacity-90 animate-pulse duration-175">
        <img src={"./svg/circle1.svg"} alt="Yellow circle" />
      </div>
      <div className="absolute top-10 -right-5 opacity-90 animate-pulse duration-175">
        <img src={"./svg/circle2.svg"} alt="Green circle" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
        <div className="md:col-span-8">
          <h1 className="font-bricolage-grotesque font-extrabold text-6xl mb-6">
            We don&apos;t just build code.
            <br />
            <span className="text-secondary italic">
              We grow digital gardens.
            </span>
          </h1>
          <p className="font-nunito-sans text-xl text-on-surface-variant max-w-2xl">
            Daisy Devs is a high-craft collective of developers who believe that
            software should be as resilient as a wildflower and as beautiful as
            a botanical illustration. We mix technical rigor with organic
            design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
