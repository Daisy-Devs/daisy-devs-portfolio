import React from "react";
import Riya from "../../../../public/images/RiyaVechiot.jpg";
import Pranita from "../../../../public/images/PranitaR.jpeg";
import Suchita from "../../../../public/images/SuchitaGanati.jpeg";
import Image from "next/image";

const MeetTheTeam = () => {
  return (
    <section className="bg-primary-container py-30 relative overflow-hidden">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-bricolage-grotesque text-5xl font-extrabold text-on-primary-container mb-4">
            Meet the Bloomers
          </h2>
          <p className="font-nunito-sans  text-on-primary-container/80">
            The creative minds behind the craft.
          </p>
        </div>
        <div className="relative min-h-200 md:min-h-150">
          <div className="relative md:absolute md:top-0 md:left-0 w-full md:w-80 group">
            <div className="bg-surface-container-lowest p-6  border-on-background -rotate-1 shadow-lg transition-all group-hover:scale-120">
              <div className="bg-lime-500/30 w-15 h-10 absolute -top-5 right-35 -rotate-2 group-hover:opacity-0"></div>
              <div className="w-full aspect-square rounded-lg mb-6 overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                  alt="A portrait of a female lead developer with a friendly smile"
                  src={Riya}
                />
              </div>
              <h3 className="font-bricolage-grotesque text-3xl text-primary mb-1">
                Riya Vechiot
              </h3>
              <p className="font-geist-sans text-label-md text-secondary uppercase tracking-widest mb-4">
                {" "}
                Mobile App Developer
              </p>
              <p className="font-nunito-sans  text-on-surface-variant">
                &quot;Good R&B on the speakers, something in the oven, and a habit of turning rough ideas into apps people actually enjoy using.&quot;
              </p>
            </div>
          </div>
          <div className="relative md:absolute md:top-35 md:left-1/2 md:-translate-x-1/2 w-full md:w-80 mt-12 md:mt-0 group">
            <div className="bg-surface-container-lowest p-6 border-on-background shadow-lg -rotate-2 transition-all group-hover:scale-120">
              <div className="bg-pink-400/30 w-15 h-10 absolute -top-5 right-30 -rotate-3 group-hover:opacity-0"></div>
              <div className="w-full aspect-square rounded-lg mb-6 overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                  alt="A portrait of a female lead developer with a friendly smile"
                  src={Pranita}
                />
              </div>
              <h3 className="font-bricolage-grotesque text-3xl text-primary mb-1">
                Pranita R.
              </h3>
              <p className="font-geist-sans text-label-md text-secondary uppercase tracking-widest mb-4">
                Backend & Blockchain Developer
              </p>
              <p className="font-nunito-sans  text-on-surface-variant">
                &quot;Speaks mostly to her dogs, lets the smart contracts do the talking, and exists in peaceful, decentralized silence.&quot;
              </p>
            </div>
          </div>
          <div className="relative md:absolute md:top-10 md:right-0 w-full md:w-80 mt-12 md:mt-0 group">
            <div className="bg-surface-container-lowest p-6 rotate-3 shadow-lg transition-all group-hover:scale-120">
              <div className="bg-blue-400/30 w-15 h-10 absolute -top-5 right-30 -rotate-3 group-hover:opacity-0"></div>

              <div className="w-full aspect-square rounded-lg mb-6 overflow-hidden">
                <Image
                  className="w-full h-full object-cover"
                  width={500}
                  height={500}
                  alt="A portrait of a female lead developer with a friendly smile"
                  src={Suchita}
                />
              </div>
              <h3 className="font-bricolage-grotesque text-3xl text-primary mb-1">
                Suchita Ganati
              </h3>
              <p className="font-geist-sans text-label-md text-secondary uppercase tracking-widest mb-4">
                Web App Developer
              </p>
              <p className="font-nunito-sans  text-on-surface-variant">
                &quot;Got a soft spot for K-dramas, fueled by seafood and an endless curiosity for new adventures.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
