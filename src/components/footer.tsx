import React from "react";

const Footer = () => {
  return (
    <footer className="bg-tertiary-container mt-0 dark:bg-on-tertiary-fixed-variant w-full  mt-section-gap">
      <div className="flex flex-col items-center text-center w-full px-margin-desktop rounded-t-[120px] py-section-gap max-w-container-max mx-auto">
        <div className="font-bricolage-grotesque mt-5 text-6xl text-on-tertiary-container dark:text-tertiary-fixed opacity-10 mb-8">
        🌼  Daisy Devs 🌼
        </div>
        <div className="flex gap-12 mb-12">
          <a
            className="font-geist-sans text-sm text-on-tertiary-container/80 dark:text-tertiary-fixed/80 hover:text-primary transition-all underline underline-offset-4"
            href="#"
          >
            Twitter
          </a>
          <a
            className="font-geist-sans text-sm text-on-tertiary-container/80 dark:text-tertiary-fixed/80 hover:text-primary transition-all underline underline-offset-4"
            href="#"
          >
            GitHub
          </a>
          <a
            className="font-geist-sans text-sm text-on-tertiary-container/80 dark:text-tertiary-fixed/80 hover:text-primary transition-all underline underline-offset-4"
            href="#"
          >
            LinkedIn
          </a>
        </div>
        <p className="font-geist-sans text-xs text-on-tertiary-container/60">
          Built to bloom. © 2026 Daisy Devs
        </p>
      </div>
    </footer>
  );
};

export default Footer;
