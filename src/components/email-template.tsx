import { Html, Body, Heading, Text, Section } from "@react-email/components";

type EmailTemplateProps = {
  name: string;
  email: string;
  selectedPackage: string;
  projectDescription: string;
};

const EmailTemplate: React.FC<EmailTemplateProps> = ({
  name,
  email,
  selectedPackage,
  projectDescription,
}) => {
  return (
    <Html>
      <Body style={{backgroundColor:'#fef3c7',textAlign:'center',color:'#766f4b',fontFamily: 'Georgia, serif',border: '1px solid #514d36',padding: '20px'}}>
        <Heading style={{ fontWeight: 'bold', color: '#514d36',textDecoration: 'underline' }}>New Project Request 🍀</Heading>
        <Section>
          <Text><strong>Name:</strong> {name}</Text>
          <Text><strong>Email:</strong> {email}</Text>
          <Text><strong>Package:</strong> {selectedPackage}</Text>
          <Text><strong>Description:</strong> {projectDescription}</Text>
        </Section>
      </Body>
    </Html>
  );
};

export default EmailTemplate;