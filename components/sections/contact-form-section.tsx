import { useTranslations } from "next-intl";
import ContactForm from "../forms/contact-form";

const ContactFormSection = () => {
  const text = useTranslations("contact");
  return (
    <section className="py-16">
      <div className="container">
        <h2 className="mb-4 text-4xl w-fit font-semibold">
          {text("title")}
          <div className="w-1/2 mt-2 h-[3px] bg-primary" />
        </h2>
        <div className="max-w-[600px]">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
