import { Typography } from "../components/Typography";
import { ContactForm } from "../forms/ContactForm";

export const ContactLanding = () => {
  return (
    <section id="ContactSection" className="space-y-10">
      <Typography as="h2" variant="title" color="marron" content="Contacto" />
      <ContactForm />
    </section>
  );
};
