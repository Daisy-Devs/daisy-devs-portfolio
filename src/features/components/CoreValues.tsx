import React from "react";

const CoreValues = () => {
  return (
    <section className="px-margin-mobile md:px-margin-desktop mx-auto py-30">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="flex flex-col gap-4">
          <div className="w-14 h-14 rounded-full border-dotted bg-tertiary-container flex items-center justify-center text-secondary border-2 border-on-background">
            <img src={"./svg/brain.svg"} alt="brain" />
          </div>
          <h4 className="font-bricolage-grotesque text-primary text-3xl">
            Meticulous Craft
          </h4>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Every line of code is hand-polished. We don&apos;t do &apos;good
            enough&apos;—we do &apos;blooming marvellous&apos;.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-14 h-14 rounded-full border-dotted bg-primary-container flex items-center justify-center text-primary border-2 border-on-background">
            <img src={"./svg/one-leaf.svg"} alt="leaf" />
          </div>
          <h4 className="font-bricolage-grotesque text-primary text-3xl">Organic Growth</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">
            We build systems that scale naturally, evolving with your business
            needs without breaking.
          </p>
        </div>
        <div className="flex flex-col gap-4">
          <div className="w-14 h-14 rounded-full border-dotted bg-secondary-container flex items-center justify-center text-on-secondary-container border-2 border-on-background">
            <img src={"./svg/sparkle.svg"} alt="sparkle" />
          </div>
          <h4 className="font-bricolage-grotesque text-primary text-3xl">Playful Intent</h4>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Professionalism doesn&apos;t have to be boring. We inject
            personality into every interaction.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
