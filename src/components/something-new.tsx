import React, { useContext } from "react";
import { Button } from "./ui/button";
import { ContactContext, useContact } from "./contact-context";

const GetInTouch = () => {
  const {contactShown, setContactShown}=useContact();
  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-30">
      <div className="bg-secondary text-on-primary p-12 md:p-20 rounded-[40px] text-center relative overflow-hidden border-4 border-on-background drop-border">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="flex flex-nowrap gap-10 p-10 justify-center">
            <img src={"./svg/flower-stem.svg"} width={30} height={30} alt="Flower" />
            <img src={"./svg/flower-stem.svg"} width={30} height={30} alt="Flower" />
            <img src={"./svg/flower-stem.svg"} width={30} height={30} alt="Flower" />
          </div>
        </div>
        <h2 className="font-bricolage-grotesque text-4xl mb-6 relative z-10">
          Ready to plant something new?
        </h2>
        <Button onClick={()=>{setContactShown(true)}}>Get in touch</Button>
      </div>
    </section>
  );
};

export default GetInTouch;
