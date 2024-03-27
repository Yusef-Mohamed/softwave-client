import { useTranslations } from "next-intl";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

const ContactForm = () => {
  const text = useTranslations("form");
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <Input placeholder={text("name")} />
        <Input placeholder={text("email")} />
      </div>
      <Input placeholder={text("phone")} />
      <Input placeholder={text("subject")} />
      <Textarea placeholder={text("contact_message_placeholder")} />
      <Button className="w-full" size={"lg"}>
        {text("send")}
      </Button>
    </form>
  );
};

export default ContactForm;
