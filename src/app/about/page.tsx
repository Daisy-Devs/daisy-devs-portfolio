"use client";
import { useContact } from "@/components/contact-context";
import ContactInfo from "@/components/contact-info";
import { ResponsiveDrawer } from "@/components/responsive-drawer";
import About from "@/features/about/screens/About";
import React from "react";

const AboutScreen = () => {
  const { contactShown, setContactShown } = useContact();

  return (
    <>
      <ResponsiveDrawer
        open={contactShown}
        setOpen={setContactShown}
        title="Contact"
        description="Need to get in touch?"
      >
        <ContactInfo />
      </ResponsiveDrawer>
      <About />
    </>
  );
};

export default AboutScreen;
