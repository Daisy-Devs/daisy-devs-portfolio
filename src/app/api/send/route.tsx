import EmailTemplate from "@/components/email-template";
import { Resend } from "resend";

const { RESEND_API_KEY } = process.env;
if (!RESEND_API_KEY) throw new Error("RESEND_API_KEY is not set");

const resend = new Resend(RESEND_API_KEY);
export async function POST(req: Request) {
  const { name, email, projectDescription, selectedPackage } = await req.json();

  if (!name || !email || !projectDescription || !selectedPackage) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const emailComponent = (
    <EmailTemplate
      name={name}
      email={email}
      selectedPackage={selectedPackage}
      projectDescription={projectDescription}
    />
  );

  try {
    const { data, error } = await resend.emails.send({
      from: "Daisy Portfolio <daisydevs.org@resend.dev>",
      to: ["daisydevs.org@gmail.com"],
      subject: "A message from the daisy portfolio 🌼✨",
      react: emailComponent,
    });

    if (error) {
      console.error("Resend error:", JSON.stringify(error));
      return Response.json({ error: "Failed to send email" }, { status: 500 });
    }
    return Response.json({ data });
  } catch (error) {
    console.error("POST /api/contact error:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
