import { useTranslations } from "next-intl";
import { BiSupport } from "react-icons/bi";
const cols = [
  {
    icon: <BiSupport />,
    title: "support_center",
    value: "+20123456789",
    link: "tel:+20123456789",
  },
  {
    icon: <BiSupport />,
    title: "support_center",
    value: "+20123456789",
    link: "tel:+20123456789",
  },
  {
    icon: <BiSupport />,
    title: "support_center",
    value: "+20123456789",
    link: "tel:+20123456789",
  },
  {
    icon: <BiSupport />,
    title: "support_center",
    value: "+20123456789",
    link: "tel:+20123456789",
  },
  {
    icon: <BiSupport />,
    title: "support_center",
    value: "+20123456789",
    link: "tel:+20123456789",
  },
];
const ContactCols = () => {
  const text = useTranslations("contact");
  return (
    <section className="py-16">
      <div className="container">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
          {cols.map((col, index) => (
            <div
              key={index}
              className="text-center border py-12 hover:scale-105 hover:border-none hover:shadow-lg transition-all"
            >
              <div className="w-fit mx-auto mb-4 text-5xl text-primary">
                {col.icon}
              </div>
              <h3 className="text-lg font-bold mb-2">{text(col.title)}</h3>
              <a href={col.link} className="text-primary">
                {col.value}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCols;
