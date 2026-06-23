import { useContact } from "@/components/contact-context";
import { Button } from "@/components/ui/button";

const GetInTouch = () => {
  const { contactShown, setContactShown } = useContact();

  return (
    <section className="relative bg-secondary pt-32 pb-32 mt-30 overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-surface petal-curve"></div>
      <div className="max-w-4xl mx-auto text-center px-margin-mobile text-on-primary">
        <h2 className="font-bricolage-grotesque text-4xl font-extrabold mb-8">
          Ready to plant a seed?
        </h2>
        <p className="font-nunito-sans text-xl mb-12 opacity-90">
          Let&apos;s build your next digital experience together. Whether
          you&apos;re a startup or an established brand, we help you grow.
        </p>
        <Button
          size="md"
          onClick={() => {
            setContactShown(true);
          }}
        >
          Get in touch
        </Button>
      </div>
    </section>
  );
};

export default GetInTouch;
