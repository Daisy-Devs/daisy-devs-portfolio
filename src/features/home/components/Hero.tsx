"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Hero = () => {
  const router = useRouter();
  return (
    <section
      aria-labelledby="hero"
      className="relative pt-32 pb-24 md:pt-48 md:pb-40 px-margin-mobile md:px-margin-desktop overflow-hidden"
    >
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-container opacity-40 blur-[100px] rounded-full -z-10"></div>
      <div className="absolute -top-20 -right-20 w-96 h-96 bg-secondary-container opacity-20 blur-[80px] rounded-full -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 opacity-10 pointer-events-none">
        <svg
          className="animate-spin animation-duration-[7s]"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="390px"
          height="390px"
          viewBox="0 0 390 390"
          xmlSpace="preserve"
        >
          <g>
            <path d="M346.364,195c23.354-10.093,40.383-28.993,40.98-47.885c0.688-21.783-20.701-36.13-49.375-34.658 c15.611-24.096,13.882-49.794-5.328-60.089c-16.659-8.929-41.542-3.631-61.96,11.548c2.939-25.272-4.917-49.47-20.979-59.434 C231.182-7.007,208.064,4.346,195,29.913C181.938,4.346,158.819-7.006,140.298,4.482c-16.063,9.964-23.917,34.162-20.979,59.434 c-20.417-15.18-45.301-20.477-61.962-11.548c-19.208,10.295-20.938,35.993-5.327,60.089c-28.673-1.472-50.063,12.875-49.375,34.658 C3.253,166.007,20.283,184.908,43.636,195c-23.354,10.093-40.383,28.993-40.981,47.885c-0.688,21.784,20.702,36.13,49.375,34.658 c-15.611,24.096-13.882,49.794,5.327,60.089c16.661,8.929,41.544,3.631,61.962-11.548c-2.938,25.272,4.917,49.47,20.979,59.434 c18.521,11.489,41.638,0.138,54.702-25.43c13.063,25.567,36.182,36.919,54.702,25.43c16.062-9.963,23.918-34.161,20.979-59.434 c20.418,15.18,45.302,20.477,61.96,11.548c19.21-10.295,20.939-35.993,5.328-60.089c28.674,1.472,50.063-12.875,49.375-34.658 C386.748,223.993,369.718,205.093,346.364,195z M195,254.963c-33.117,0-59.963-26.847-59.963-59.963s26.847-59.963,59.963-59.963 s59.963,26.847,59.963,59.963S228.118,254.963,195,254.963z" />
          </g>
        </svg>
      </div>
      <div className="max-w-4xl mx-auto text-center relative">
        <span className="inline-block bg-tertiary-container text-on-tertiary-container px-4 py-1 font-geist-sans -rotate-5 hover:rotate-0 text-xs mb-6 drop-border rounded-full border-2 border-on-surface">
          NOW BLOOMING IN THE WILD
        </span>
        <h1 className="font-bricolage-grotesque text-6xl font-extrabold mb-6 text-on-surface">
          We build things <br className="hidden md:block" />
          <span className="text-secondary italic">that bloom</span>
        </h1>
        <p className="font-nunito-sans text-xl text-on-surface-variant max-w-2xl mx-auto mb-10">
          A high-craft development studio dedicated to technical rigor and
          organic growth. We turn complex problems into digital gardens that
          flourish.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <Button onClick={() => {router.push('/pricing')}}>Start a Project</Button>
          <Link
            className="font-geist-sans text-sm font-semibold text-secondary hover:underline flex items-center gap-2"
            href="/projects"
          >
            View our garden
            <ArrowRight />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
