import { PRICING } from "@/constants";
import { Blocks } from "lucide-react";
import React from "react";

type AddOnsProps = {
  currency: "INR" | "USD";
};
const AddOns: React.FC<AddOnsProps> = ({currency}) => {
  return (
    <section className="max-w-4xl mx-auto px-margin-mobile md:px-margin-desktop mb-30">
      <div className="flex items-center gap-4 mb-12 justify-center">
        <Blocks size={50} className="text-secondary" />
        <h2 className="font-bricolage-grotesque text-3xl font-bold">
          Garden Enhancements (Add-ons)
        </h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-5 border border-on-surface/20 rounded-2xl flex justify-between items-center bg-surface hover:border-secondary transition-colors group">
          <div>
            <div className="font-geist-sans text-on-surface group-hover:text-secondary transition-colors">
              Post-launch Support (30 days)
            </div>
            <div className="text-xs text-on-surface-variant">
              Bug fixes &amp; updates
            </div>
          </div>
          <div className="font-bold text-primary" data-is-addon="true">
            {PRICING[currency].pls}
          </div>
        </div>
        <div className="p-5 border border-on-surface/20 rounded-2xl flex justify-between items-center bg-surface hover:border-secondary transition-colors group">
          <div>
            <div className="font-geist-sans text-on-surface group-hover:text-secondary transition-colors">
              Quarterly support
            </div>
            <div className="text-xs text-on-surface-variant">
              Bug fixes & minor updates every quarter
            </div>
          </div>
          <div className="font-bold text-primary" data-is-addon="true">
            {PRICING[currency].quarterly}
          </div>
        </div>
        <div className="p-5 border border-on-surface/20 rounded-2xl flex justify-between items-center bg-surface hover:border-secondary transition-colors group">
          <div>
            <div className="font-geist-sans text-on-surface group-hover:text-secondary transition-colors">
              Annual Maintenance
            </div>
            <div className="text-xs text-on-surface-variant">
              Yearly monitoring
            </div>
          </div>
          <div className="font-bold text-primary" data-is-addon="true">
             {PRICING[currency].amc}
          </div>
        </div>
        <div className="p-5 border border-on-surface/20 rounded-2xl flex justify-between items-center bg-surface hover:border-secondary transition-colors group">
          <div>
            <div className="font-geist-sans text-on-surface group-hover:text-secondary transition-colors">
              AI Chatbot
            </div>
            <div className="text-xs text-on-surface-variant">
              Intelligent assistant
            </div>
          </div>
          <div className="font-bold text-primary" data-is-addon="true">
             {PRICING[currency].chatbot}
          </div>
        </div>
        <div className="p-5 border border-on-surface/20 rounded-2xl flex justify-between items-center bg-surface hover:border-secondary transition-colors group">
          <div>
            <div className="font-geist-sans text-on-surface group-hover:text-secondary transition-colors">
              Platform Mobile App
            </div>
            <div className="text-xs text-on-surface-variant">
              iOS &amp; Android extension
            </div>
          </div>
          <div className="font-bold text-primary" data-is-addon="true">
            {PRICING[currency].extraplatform}
          </div>
        </div>
        <div className="p-5 border border-on-surface/20 rounded-2xl flex justify-between items-center bg-surface hover:border-secondary transition-colors group">
          <div>
            <div className="font-geist-sans text-on-surface group-hover:text-secondary transition-colors">
              Advanced SEO
            </div>
            <div className="text-xs text-on-surface-variant">
              For Starter/Business
            </div>
          </div>
          <div className="font-bold text-primary" data-is-addon="true">
             {PRICING[currency].seo}
          </div>
        </div>
        <div className="p-5 border border-on-surface/20 rounded-2xl flex justify-between items-center bg-surface hover:border-secondary transition-colors group">
          <div>
            <div className="font-geist-sans text-on-surface group-hover:text-secondary transition-colors">
              Loyalty &amp; Rewards
            </div>
            <div className="text-xs text-on-surface-variant">
              Referral module
            </div>
          </div>
          <div className="font-bold text-primary" data-is-addon="true">
            {PRICING[currency].loyalty}
          </div>
        </div>
        <div className="p-5 border border-on-surface/20 rounded-2xl flex justify-between items-center bg-surface hover:border-secondary transition-colors group">
          <div>
            <div className="font-geist-sans text-on-surface group-hover:text-secondary transition-colors">
              App widget (mobile)
            </div>
            <div className="text-xs text-on-surface-variant">
              Price based on complexity — contact us
            </div>
          </div>
          <div className="font-bold text-primary" data-is-addon="true">
             {PRICING[currency].widget}
          </div>
        </div>
        <div className="p-5 border border-on-surface/20 rounded-2xl flex justify-between items-center bg-surface hover:border-secondary transition-colors group">
          <div>
            <div className="font-geist-sans text-on-surface group-hover:text-secondary transition-colors">
              Extra web page
            </div>
            <div className="text-xs text-on-surface-variant">
              For Starter package only
            </div>
          </div>
          <div className="font-bold text-primary" data-is-addon="true">
             {PRICING[currency].extrapage}
          </div>
        </div>
        <div className="p-5 border border-on-surface/20 rounded-2xl flex justify-between items-center bg-surface hover:border-secondary transition-colors group">
          <div>
            <div className="font-geist-sans text-on-surface group-hover:text-secondary transition-colors">
              Multi-language support
            </div>
            <div className="text-xs text-on-surface-variant">
              Add one additional language
            </div>
          </div>
          <div className="font-bold text-primary" data-is-addon="true">
             {PRICING[currency].multilang}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddOns;
