import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-tertiary-container mt-0 dark:bg-on-tertiary-fixed-variant w-full mt-30">
      <div className="flex flex-col items-center text-center w-full px-margin-desktop rounded-t-[120px] py-30 max-w-container-max mx-auto">
        <div className="font-bricolage-grotesque mt-5 text-6xl text-on-tertiary-container dark:text-tertiary-fixed opacity-10 mb-8">
        🌼  Daisy Devs 🌼
        </div>
        <div className="flex gap-12 mb-12">
          <Link
            className="font-geist-sans text-sm text-on-tertiary-container/80 dark:text-tertiary-fixed/80 hover:text-primary transition-all underline underline-offset-4"
            href="https://www.fiverr.com/daisy_devs_org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Fiverr
          </Link>
          <Link
            className="font-geist-sans text-sm text-on-tertiary-container/80 dark:text-tertiary-fixed/80 hover:text-primary transition-all underline underline-offset-4"
            href="https://github.com/Daisy-Devs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </Link>
          <Link
            className="font-geist-sans text-sm text-on-tertiary-container/80 dark:text-tertiary-fixed/80 hover:text-primary transition-all underline underline-offset-4"
            href="https://www.linkedin.com/in/daisy-devs/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </Link>
          <Link
            className="font-geist-sans text-sm text-on-tertiary-container/80 dark:text-tertiary-fixed/80 hover:text-primary transition-all underline underline-offset-4"
            href="/about"
          >
            About
          </Link>
        </div>
        <p className="font-geist-sans text-xs text-on-tertiary-container/60">
          Built to bloom. © 2026 Daisy Devs
        </p>
      </div>
    </footer>
  );
};

export default Footer;
