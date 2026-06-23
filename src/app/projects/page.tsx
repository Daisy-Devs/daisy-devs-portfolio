"use client";
import { useContact } from "@/components/contact-context";
import ContactInfo from "@/components/contact-info";
import { ResponsiveDrawer } from "@/components/responsive-drawer";
import Projects from "@/features/projects/screens/Projects";

const ProjectScreen = () => {
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
      <Projects />
    </>
  );
};

export default ProjectScreen;
