import React from "react";

const Marquee = () => {
  return (
    <section className="py-10 -rotate-1 bg-on-primary-container overflow-hidden border-y-2 border-on-surface">
      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-12 px-6">
          <span className="text-primary-fixed text-2xl font-bricolage-grotesque flex items-center gap-4">
            React <span className="text-secondary-fixed">✿</span>
          </span>
          <span className="text-primary-fixed text-2xl font-bricolage-grotesque flex items-center gap-4">
            Node.js <span className="text-secondary-fixed">✿</span>
          </span>
          <span className="text-primary-fixed text-2xl font-bricolage-grotesque flex items-center gap-4">
            UI/UX <span className="text-secondary-fixed">✿</span>
          </span>
          <span className="text-primary-fixed text-2xl font-bricolage-grotesque flex items-center gap-4">
            WebGL <span className="text-secondary-fixed">✿</span>
          </span>
          <span className="text-primary-fixed text-2xl font-bricolage-grotesque flex items-center gap-4">
            Startups <span className="text-secondary-fixed">✿</span>
          </span>
          <span className="text-primary-fixed text-2xl font-bricolage-grotesque flex items-center gap-4">
            Eco-brands <span className="text-secondary-fixed">✿</span>
          </span>
          <span className="text-primary-fixed text-2xl font-bricolage-grotesque flex items-center gap-4">
            Creative Studios <span className="text-secondary-fixed">✿</span>
          </span>
        </div>
        <div className="flex items-center gap-12 px-6">
          <span className="text-primary-fixed text-2xl font-bricolage-grotesque flex items-center gap-4">
            React <span className="text-secondary-fixed">✿</span>
          </span>
          <span className="text-primary-fixed text-2xl font-bricolage-grotesque flex items-center gap-4">
            Node.js <span className="text-secondary-fixed">✿</span>
          </span>
          <span className="text-primary-fixed text-2xl font-bricolage-grotesque flex items-center gap-4">
            UI/UX <span className="text-secondary-fixed">✿</span>
          </span>
          <span className="text-primary-fixed text-2xl font-bricolage-grotesque flex items-center gap-4">
            React Native <span className="text-secondary-fixed">✿</span>
          </span>
          <span className="text-primary-fixed text-2xl font-bricolage-grotesque flex items-center gap-4">
            Startups <span className="text-secondary-fixed">✿</span>
          </span>
          <span className="text-primary-fixed text-2xl font-bricolage-grotesque flex items-center gap-4">
            Eco-brands <span className="text-secondary-fixed">✿</span>
          </span>
          <span className="text-primary-fixed text-2xl font-bricolage-grotesque flex items-center gap-4">
            Businesses <span className="text-secondary-fixed">✿</span>
          </span>
        </div>
      </div>
    </section>
  );
};

export default Marquee;
