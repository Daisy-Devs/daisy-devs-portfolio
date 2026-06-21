import { Button } from "@/components/ui/button";
import { PRICING } from "@/constants";
import { ChevronsLeftRightEllipsis, CircleCheck, Clock3 } from "lucide-react";
import React from "react";

type WebPackagesProps = {
  currency: "INR" | "USD";
};
const WebPackages: React.FC<WebPackagesProps> = ({ currency }) => {
  return (
    <section className="mx-auto px-margin-desktop mb-30 relative">
      <div className="flex items-center gap-4 mb-12">
        <ChevronsLeftRightEllipsis
          size={50}
          className="text-secondary text-4xl"
        />
        <h2 className="font-bricolage-grotesque font-extrabold text-3xl">
          Web Packages
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* <!-- Starter --> */}
        <div className="bg-surface-container-lowest border-2 border-on-surface rounded-[40px] p-8 drop-border flex flex-col h-full hover:rotate-1 transition-all">
          <div className="mb-6">
            <h3 className="font-bricolage-grotesque font-bold text-3xl mb-2">
              Starter
            </h3>
            <p className="font-nunito-sans text-on-surface-variant mb-4">
              Simple informational website
            </p>
            <div className="flex items-baseline gap-1">
              <span
                className="font-bricolage-grotesque font-bold text-5xl text-primary"
              >
                {PRICING[currency].starter}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-on-surface-variant opacity-70">
              <Clock3 size={20} className="align-middle" />
              <span className="text-sm">5–7 days</span>
            </div>
          </div>
          <ul className="flex-grow space-y-3 mb-8">
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight align-baseline">
                Home, Services, About Us & Contact pages(4 pages)
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">Mobile Responsive</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">Basic SEO</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">
                Google Maps integration
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">Contact form</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">Social media links</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">
                Domain & hosting assistance
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">Website deployment</span>
            </li>
          </ul>
          <Button variant={"tertiary"} size={"md"}>
            Start Small
          </Button>
        </div>
        {/* <!-- Business --> */}
        <div className="bg-surface-container-lowest border-2 border-on-surface rounded-[40px] p-8 drop-border flex flex-col h-full hover:-rotate-1 transition-all">
          <div className="mb-6">
            <h3 className="font-bricolage-grotesque font-bold text-3xl mb-2">
              Business
            </h3>
            <p className="font-nunito-sans text-on-surface-variant mb-4">
              Content-managed website
            </p>
            <div className="flex items-baseline gap-1">
              <span
                className="font-bricolage-grotesque font-bold text-5xl text-primary"
              >
                {PRICING[currency].business}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-on-surface-variant opacity-70">
              <Clock3 size={20} className="align-middle" />
              <span className="text-sm">15–20 days</span>
            </div>
          </div>
          <ul className="flex-grow space-y-3 mb-8">
            <li className="flex items-center gap-2 text-primary font-bold">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm">Everything in Starter</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm">Admin Dashboard</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm">Up to 2 admin accounts</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm">Services management</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm">Basic mailing (500 emails/month)</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm">Instagram feed embed</span>
            </li>
          </ul>
          <Button variant={"tertiary"} size={"md"}>
            Go Pro
          </Button>
        </div>
        {/* <!-- Growth (Most Popular) --> */}
        <div className="relative bg-primary-container border-4 border-on-background rounded-[40px] p-8 flex flex-col h-full drop-border scale-105 z-10">
          <div className="absolute -top-6 -right-6 w-20 h-20 daisy-stamp flex items-center justify-center">
            <div className="absolute inset-0 bg-secondary rounded-full flex items-center justify-center"></div>
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none animate-spin animation-duration-[10s]">
              <img src={"./svg/most-popular.svg"} alt="most popular badge" />
            </div>
          </div>
          <div className="mb-6">
            <h3 className="font-bricolage-grotesque font-bold text-3xl mb-2">
              Growth
            </h3>
            <p className="font-nunito-sans text-on-primary-container mb-4">
              Online ordering platform
            </p>
            <div className="flex items-baseline gap-1">
              <span
                className="font-bricolage-grotesque font-bold text-5xl text-secondary"
              >
                {PRICING[currency].growth}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-on-primary-container opacity-70">
              <Clock3 size={20} className="align-middle" />
              <span className="text-sm">25–30 days</span>
            </div>
          </div>
          <ul className="flex-grow space-y-3 mb-8">
            <li className="flex items-center gap-2 text-secondary font-bold">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm">Everything in Business</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">
                Customer registration & login
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">E-commerce</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">
                Payment gateway integration
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">
                Email order notifications
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">Analytics</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">Advanced SEO setup</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">
                Unlimited admin accounts
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">
                30 days post-launch support
              </span>
            </li>
          </ul>
          <Button variant={"secondary"} size={"md"}>
            Blossom Now
          </Button>
        </div>
        <div className="bg-surface-container-lowest border-2 border-on-surface rounded-[40px] p-8 drop-border flex flex-col h-full hover:rotate-1 transition-all">
          <div className="mb-6">
            <h3 className="font-bricolage-grotesque font-bold text-3xl mb-2">
              Enterprise
            </h3>
            <p className="font-nunito-sans text-on-surface-variant mb-4">
              Full-scale digital platform
            </p>
            <div className="flex items-baseline gap-1">
              <span
                className="font-bricolage-grotesque font-bold text-5xl text-primary"
              >
                {PRICING[currency].enterprise}
              </span>
            </div>
            <div className="flex items-center gap-2 mt-2 text-on-surface-variant opacity-70">
              <Clock3 size={20} className="align-middle" />
              <span className="text-sm">30–40 days</span>
            </div>
          </div>
          <ul className="flex-grow space-y-3 mb-8">
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">Everything in Growth</span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">
                Loyalty & rewards program
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">
                Multi-branch support
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">
                Staff management
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={30}  className="text-secondary" />
              <span className="text-sm leading-tight">
                Multi-language support(Upto 3)
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={25} className="text-secondary shrink-0 mt-0.5" />
              <span className="text-sm leading-tight">
                Advanced reports & insights
              </span>
            </li>
            <li className="flex items-center gap-2">
              <CircleCheck size={30} className="text-secondary" />
              <span className="text-sm leading-tight">
                Quarterly support included
              </span>
            </li>
          </ul>
          <Button variant={"tertiary"} size={"md"}>
            Build Forest
          </Button>
        </div>
      </div>
    </section>
  );
};

export default WebPackages;
