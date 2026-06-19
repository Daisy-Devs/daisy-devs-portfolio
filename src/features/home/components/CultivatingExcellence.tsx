import Image from "next/image";
import React from "react";
import imageGarden from "../../../../public/images/Studio Garden.png";
import { Server, TabletSmartphone } from "lucide-react";
const CultivatingExcellence = () => {
  return (
    <section className="py-30 px-margin-mobile md:px-margin-desktop mx-auto">
      <div className="mb-16">
        <h2 className="font-bricolage-grotesque text-5xl font-bold text-on-surface mb-4">
          Cultivating Excellence
        </h2>
        <p className="font-nunito-sans text-xl text-on-surface-variant max-w-xl">
          We don&apos;t just write code; we nurture your digital presence with
          care, craft, and precision.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        <div className="md:col-span-8 bg-on-primary border-2 border-on-surface shadow-drop-border p-8 flex flex-col justify-between hover:bg-primary-container/20 drop-border relative group transition-all duration-700 opacity-100 translate-y-0 rounded-[24px]">
          <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-100 transition-opacity">
            <span className="text-6xl text-primary">
              ✿
            </span>
          </div>
          <div>
            <h3 className="text-2xl font-bricolage-grotesque mb-4">
              Web Development
            </h3>
            <p className="font-nunito-sans  text-on-surface-variant max-w-md">
              Scalable architectures built with modern frameworks like Next.js
              and React, optimized for speed and longevity.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 mt-8">
            <span className="bg-tertiary-container px-3 py-1 rounded text-xs font-geist-sans border border-on-surface">
              PERFORMANCE
            </span>
            <span className="bg-tertiary-container px-3 py-1 rounded text-xs font-geist-sans border border-on-surface">
              ACCESSIBILITY
            </span>
            <span className="bg-tertiary-container px-3 py-1 rounded text-xs font-geist-sans border border-on-surface">
              SEO
            </span>
          </div>
        </div>

        <div className="md:col-span-4 bg-on-primary border-2 border-on-surface shadow-drop-border rounded-xl p-8 flex flex-col justify-between drop-border border-t-4 border-t-secondary transition-all duration-700 opacity-100 translate-y-0 group">
          <div className="mb-6 opacity-10 group-hover:opacity-100">
            <TabletSmartphone size={48} className="text-7xl text-secondary"/>
          </div>
          <div>
            <h3 className="text-2xl font-bricolage-grotesque mb-2">Mobile App Development</h3>
            <p className="font-nunito-sans  text-on-surface-variant">
              Transform your ideas into powerful mobile apps with our expert development services. We build fast, secure, and user-friendly applications tailored to your business needs and goals.
            </p>
          </div>
        </div>

        <div className="md:col-span-4 bg-on-primary border-2 border-on-surface shadow-drop-border rounded-xl p-8 flex flex-col justify-between drop-border border-t-4 border-t-primary transition-all duration-700 opacity-100 translate-y-0 group">
          <div className="mb-6 opacity-10 group-hover:opacity-100">
            <Server size={58} className="text-4xl text-primary"/>
          </div>
          <div>
            <h3 className="text-2xl font-bricolage-grotesque mb-2">Scalable Backend & Crypto Solutions</h3>
            <p className="font-nunito-sans  text-on-surface-variant">
              Our backend development services deliver robust architectures, cloud infrastructure, and seamless API integrations to support business growth. We also develop blockchain and cryptocurrency solutions, enabling secure transactions, smart contract automation, and next-generation Web3 experiences.
            </p>
          </div>
        </div>

        <div className="md:col-span-8 bg-secondary-container border-2 border-on-surface shadow-drop-border rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 drop-border transition-all duration-700 opacity-100 translate-y-0">
          <div className="w-60 h-48 rounded-xl overflow-hidden border border-on-surface">
            <Image
              className="w-full h-full object-cover rounded-xl"
              objectFit="cover"
              alt="A lush, creative digital studio office with lots of green hanging plants, warm natural wood furniture, and high-tech minimalist computer setups. The afternoon sun streams through large windows, creating soft shadows and a peaceful, productive atmosphere. The aesthetic is clean, modern, and focuses on the intersection of nature and technology."
              src={imageGarden}
            />
          </div>
          <div className="flex-1">
            <h3 className="text-2xl font-bricolage-grotesque mb-4">
              Dedicated Support
            </h3>
            <p className="font-nunito-sans  text-on-secondary-fixed-variant">
              We provide ongoing care for your digital garden, ensuring
              everything stays green and healthy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CultivatingExcellence;
