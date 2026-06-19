import React from "react";
import Riya from "../../../public/images/RiyaVechiot.jpg";
import Pranita from "../../../public/images/PranitaR.jpeg";
import Image from "next/image";

const MeetTheTeam = () => {
  return (
    <section className="bg-primary-container py-30 relative overflow-hidden">
      <div className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-bricolage-grotesque text-5xl font-extrabold text-on-primary-container mb-4">
            Meet the Bloomers
          </h2>
          <p className="font-body-md text-body-md text-on-primary-container/80">
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
              <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-4">
                {" "}
                Mobile App Developer
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                &quot;Fueled by good music, homemade meals, and the unhinged desire to make every button satisfyingly clickable 😬.&quot;
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
              <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-4">
                Backend & Blockchain Developer
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                &quot;Prefers writing clean logic over sleeping. Owns too many
                succulents.&quot;
              </p>
            </div>
          </div>
          <div className="relative md:absolute md:top-10 md:right-0 w-full md:w-80 mt-12 md:mt-0 group">
            <div className="bg-surface-container-lowest p-6 rotate-3 shadow-lg transition-all group-hover:scale-120">
              <div className="bg-blue-400/30 w-15 h-10 absolute -top-5 right-30 -rotate-3 group-hover:opacity-0"></div>

              <div className="w-full aspect-square rounded-lg mb-6 overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  alt="A portrait of a male lead developer with a friendly smile,"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </div>
              <h3 className="font-bricolage-grotesque text-3xl text-primary mb-1">
                Suchita Ganati
              </h3>
              <p className="font-label-md text-label-md text-secondary uppercase tracking-widest mb-4">
                Web App Developer
              </p>
              <p className="font-body-md text-body-md text-on-surface-variant">
                &quot;Prefers writing clean logic over sleeping. Owns too many
                succulents.&quot;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetTheTeam;
