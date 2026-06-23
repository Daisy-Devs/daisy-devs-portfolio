import { Button } from "@/components/ui/button";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

type GetPackageProps = {
  selectedPackage: string;
};
const GetPackage: React.FC<GetPackageProps> = ({ selectedPackage }) => {
  const [loading, setLoading] = useState(false);
  const [visitorName, setVisitorName] = useState("");
  const [visitorEmail, setVisitorEmail] = useState("");
  const [projectDescription, setProjectDescription] = useState("");
  const sendEmail = async () => {
    setLoading(true);
    if (
      !/^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}$/.test(visitorEmail)
    ) {
      toast.error("Invalid email address");
      setLoading(false);
      return;
    }
    const res = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: visitorName,
        email: visitorEmail,
        selectedPackage: selectedPackage,
        projectDescription: projectDescription,
      }),
    });

    if (res.ok) {
      toast.success(
        "Thanks! We've received your details and will get back to you shortly. 🎉",
      );
      setVisitorEmail("");
      setProjectDescription("");
      setVisitorName("");
    } else {
      toast.error("Something went wrong");
    }
    console.log(
      "email sent",
      visitorEmail,
      visitorName,
      selectedPackage,
      projectDescription,
    );
    setLoading(false);
  };
  return (
    <FieldGroup>
      <Field>
        <FieldLabel htmlFor="fieldgroup-name">Name</FieldLabel>
        <Input
          id="fieldgroup-name"
          value={visitorName}
          onChange={(e) => setVisitorName(e.target.value)}
          placeholder="Michael Joseph"
          required
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="fieldgroup-email">Email</FieldLabel>
        <Input
          id="fieldgroup-email"
          type="email"
          required
          value={visitorEmail}
          onChange={(e) => setVisitorEmail(e.target.value)}
          placeholder="name@example.com"
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="fieldgroup-package">Package Opted</FieldLabel>
        <Input
          id="fieldgroup-package"
          value={selectedPackage}
          aria-disabled
          disabled
        />
      </Field>
      <Field>
        <FieldLabel htmlFor="fieldgroup-description">
          Project Description
        </FieldLabel>
        <Textarea
          id="fieldgroup-description"
          value={projectDescription}
          onChange={(e) => setProjectDescription(e.target.value)}
          placeholder="Describe the project you want us to work on"
          rows={4}
          required
        />
      </Field>

      <Field orientation="horizontal">
        <Button
          variant={"tertiary"}
          size={"sm"}
          type="reset"
          onClick={() => {
            setProjectDescription("");
            setVisitorEmail("");
            setVisitorName("");
          }}
        >
          Reset
        </Button>
        <Button
          variant={"secondary"}
          size={"sm"}
          disabled={
            loading ||
            !visitorEmail ||
            !visitorName ||
            !projectDescription ||
            !selectedPackage
          }
          onClick={sendEmail}
          type="submit"
        >
          Submit
        </Button>
      </Field>
    </FieldGroup>
  );
};

export default GetPackage;
