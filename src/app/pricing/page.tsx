"use client";
import { useContact } from "@/components/contact-context";
import ContactInfo from "@/components/contact-info";
import { ResponsiveDrawer } from "@/components/responsive-drawer";
import GetPackage from "@/features/pricing/components/GetPackage";
import Pricing from "@/features/pricing/screens/Pricing";
import React, { useState } from "react";

const PricingPage = () => {
  const { contactShown, setContactShown } = useContact();
  const [enquiryFormShown, setEnquiryFormShown] = useState(false);
  const [packageSelected, setPackageSelected] = useState("");

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
      <ResponsiveDrawer
        open={enquiryFormShown}
        setOpen={setEnquiryFormShown}
        title="Get Started"
        description="We'll review your details and get back to you as soon as possible."
      >
        <GetPackage selectedPackage={packageSelected} />
      </ResponsiveDrawer>
      <Pricing
        setSelectedPackage={setPackageSelected}
        setEnquiryFormShown={setEnquiryFormShown}
      />
    </>
  );
};

export default PricingPage;
