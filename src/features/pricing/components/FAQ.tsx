import { ChevronDown } from "lucide-react";
import React from "react";

const FAQ = () => {
  return (
    <section className="max-w-4xl mx-auto px-margin-mobile">
      <h2 className="font-bricolage-grotesque text-3xl text-center mb-12">
        Growing pains? We have answers.
      </h2>
      <div className="space-y-6">
        <details className="group bg-surface border border-on-background p-6 rounded-lg cursor-pointer transition-all hover:bg-surface-container-low">
          <summary className="flex justify-between items-center font-geist-sans text-label-md list-none">
            <span className="">How long does a typical build take?</span>
            <ChevronDown className=" group-open:rotate-180 transition-transform"/>
          </summary>
          <p className="mt-4 font-nunito-sans  text-on-surface-variant">
            Timelines range from 5 business days for a Starter site to 8 weeks
            for a Premium Mobile App. We prioritize craft and quality in every
            season.
          </p>
        </details>
        <details className="group bg-surface border border-on-background p-6 rounded-lg cursor-pointer transition-all hover:bg-surface-container-low">
          <summary className="flex justify-between items-center font-geist-sans text-label-md list-none">
            <span className="">Do you offer maintenance?</span>
            <ChevronDown className=" group-open:rotate-180 transition-transform"/>
          </summary>
          <p className="mt-4 font-nunito-sans text-on-surface-variant">
            Yes, we offer &quot;Garden Care&quot; retainers and annual
            maintenance contracts (AMC) to keep your digital garden blooming
            year-round.
          </p>
        </details>
        <details className="group bg-surface border border-on-background p-6 rounded-lg cursor-pointer transition-all hover:bg-surface-container-low">
          <summary className="flex justify-between items-center font-geist-sans text-label-md list-none">
            <span className="">Do I have to purchase a domain or will it be included?</span>
            <ChevronDown className=" group-open:rotate-180 transition-transform"/>
          </summary>
          <p className="mt-4 font-nunito-sans text-on-surface-variant">
            We do provide domain creation service, If you already have a domain we could stick with that too.
          </p>
        </details>
      </div>
    </section>
  );
};

export default FAQ;
