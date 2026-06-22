"use client";
import pok from "../../../../public/images/PoK.png";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
const ProjectItems = () => {
  const router = useRouter();
  return (
    <section className="bg-primary-container py-20 px-margin-desktop mb-15">
      <div className="mx-auto relative">
        {/* Asymmetric Bento Grid / Cluster */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {/* Project 1: Large Featured */}
          <div className="md:col-span-7 group">
            <div className="bg-surface-container-lowest p-6 rounded-[40px] shadow-drop-border animate-float">
              <div className="relative overflow-hidden rounded-[32px] aspect-16/10 mb-8">
                <Image
                  className="w-full h-full object-cover"
                  alt="PoK landing page"
                  src={pok}
                  width={700}
                  height={700}
                />
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="bg-secondary-fixed-dim text-on-secondary-fixed px-3 py-1 rounded-full text-xs font-geist-sans">
                    Web App
                  </span>
                  <span className="text-on-surface-variant font-geist-sans text-xs">
                    2026
                  </span>
                </div>
                <h3 className="font-bricolage-grotesque text-4xl flex items-center text-on-surface group-hover:text-secondary transition-colors">
                  PoK{" "}
                  <Link href="https://pok-fe.up.railway.app/" target="_blank">
                    <Button size={"sm"} className="ml-5 align-middle" variant={"secondary"}>
                      <ArrowUpRight className="w-4 h-4" />
                    </Button>
                  </Link>
                </h3>
                <p className="font-nunito-sans text-on-surface-variant">
                  PoK, a SaaS platform bridges the gap between radical
                  accountability and personal privacy in the philanthropic
                  sector. By leveraging blockchain technology, the platform
                  creates an immutable, public ledger of fund movements
                </p>
              </div>
            </div>
          </div>
          {/* Project 2: Tall Asymmetric */}
          {/* <div className="md:col-span-5 md:mt-24 group">
            <div className="bg-tertiary-container p-8 rounded-[60px] shadow-drop-border animate-float">
              <div className="relative overflow-hidden rounded-[48px] aspect-[1/1.2] mb-8">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Close-up of a mobile app UI displayed on a sleek phone, featuring soft buttery yellow backgrounds and deep green typography. The screen shows a plant care tracker with elegant line-art icons and soft shadows. Surrounding the phone are subtle daisy petals and soft natural lighting. Minimalist editorial style, bright and airy."
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <h3 className="font-bricolage-grotesque text-3xl text-on-surface group-hover:text-secondary transition-colors">
                Leafy Logbook
              </h3>
              <p className="font-nunito-sans  text-on-surface-variant">
                Mobile application for rare plant enthusiasts, featuring
                AI-driven growth tracking.
              </p>
            </div>
          </div> */}
          {/* Project 3: Wide Layout */}
          {/* <div className="md:col-span-12 group md:-mt-12">
            <div className="bg-surface-container-high p-8 md:p-12 rounded-[50px] shadow-drop-border flex flex-col md:flex-row gap-8 items-center animate-float">
              <div className="w-full md:w-1/2 relative overflow-hidden rounded-[40px] aspect-video">
                <img
                  className="w-full h-full object-cover"
                  data-alt="A wide, landscape-oriented image showing a luxurious website for a landscape architecture firm. The design uses asymmetrical layouts, large margins, and high-quality photography of botanical gardens. The UI is clean, using a palette of off-white and soft greens. Warm, editorial lighting creates a sense of sophistication and craft."
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-4">
                  <span className="bg-primary-fixed text-on-primary-fixed px-3 py-1 rounded-full text-xs font-geist-sans">
                    Web Experience
                  </span>
                </div>
                <h3 className="font-bricolage-grotesque text-5xl text-on-surface group-hover:text-secondary transition-colors leading-tight mb-4">
                  Verdant Horizon Architects
                </h3>
                <p className="font-nunito-sans text-xl text-on-surface-variant mb-6">
                  A high-end editorial website showcase for a leading landscape
                  firm, utilizing fluid grid systems and organic transitions.
                </p>
              </div>
            </div>
          </div> */}
          {/* Project 4: Square Small */}
          {/* <div className="md:col-span-6 group">
            <div className="bg-secondary-container p-8 rounded-[40px] shadow-drop-border animate-float">
              <div className="relative overflow-hidden rounded-[32px] aspect-square mb-8">
                <img
                  className="w-full h-full object-cover"
                  data-alt="Stylized 3D icon of a blooming flower made of matte porcelain, set against a soft sage green background. The lighting is soft and global, highlighting the delicate curves of the petals. High-craft aesthetic, minimal and modern. Soft-organicism style with professional studio lighting."
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <h3 className="font-bricolage-grotesque text-3xl text-on-surface">
                Petal UI Kit
              </h3>
              <p className="font-nunito-sans  text-on-surface-variant">
                A custom design system for botanical startups, focusing on
                accessibility and organic flow.
              </p>
            </div>
          </div> */}
          {/* Project 5: Medium Offset */}
          {/* <div className="md:col-span-6 md:mt-16 group">
            <div className="bg-on-primary-fixed text-surface p-8 rounded-[80px] shadow-drop-border animate-float">
              <div className="relative overflow-hidden rounded-[60px] aspect-[4/3] mb-8 bg-surface/10 p-4">
                <img
                  className="w-full h-full object-cover rounded-[50px]"
                  data-alt="A dark-mode digital artwork featuring abstract glowing lines that form the silhouette of a flower. The lines are thin and technical, like a architectural blueprint, but the overall shape is organic. Neon green and soft yellow highlights pierce through a deep charcoal background. High-tech meets natural beauty."
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <h3 className="font-bricolage-grotesque text-3xl group-hover:text-secondary-fixed transition-colors">
                Obsidian Orchid
              </h3>
              <p className="font-nunito-sans  opacity-80">
                A niche e-commerce platform for rare nocturnal flora, featuring
                an experimental dark-mode botanical aesthetic.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ProjectItems;
