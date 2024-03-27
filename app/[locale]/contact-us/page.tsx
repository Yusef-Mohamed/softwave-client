import ContactCols from "@/components/sections/contact-cols";
import ContactFormSection from "@/components/sections/contact-form-section";
import { unstable_setRequestLocale } from "next-intl/server";

const ContactPage = ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <ContactCols />
      <ContactFormSection />
    </main>
  );
};

export default ContactPage;
