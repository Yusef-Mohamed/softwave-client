import { getTranslations } from "next-intl/server";
import SectionHeading from "../ui/section-heading";
const members = [
  {
    name: "Yousef Mohamed",
    image: "/images/clients/client-1.jpg",
    title: "Frontend Developer",
  },
  {
    name: "Yousef Mohamed",
    image: "/images/clients/client-1.jpg",
    title: "Frontend Developer",
  },
  {
    name: "Yousef Mohamed",
    image: "/images/clients/client-1.jpg",
    title: "Frontend Developer",
  },
  {
    name: "Yousef Mohamed",
    image: "/images/clients/client-1.jpg",
    title: "Frontend Developer",
  },
  {
    name: "Yousef Mohamed",
    image: "/images/clients/client-1.jpg",
    title: "Frontend Developer",
  },
  {
    name: "Yousef Mohamed",
    image: "/images/clients/client-1.jpg",
    title: "Frontend Developer",
  },
  {
    name: "Yousef Mohamed",
    image: "/images/clients/client-1.jpg",
    title: "Frontend Developer",
  },
  {
    name: "Yousef Mohamed",
    image: "/images/clients/client-1.jpg",
    title: "Frontend Developer",
  },
  {
    name: "Yousef Mohamed",
    image: "/images/clients/client-1.jpg",
    title: "Frontend Developer",
  },
  {
    name: "Yousef Mohamed",
    image: "/images/clients/client-1.jpg",
    title: "Frontend Developer",
  },
  {
    name: "Yousef Mohamed",
    image: "/images/clients/client-1.jpg",
    title: "Frontend Developer",
  },
  {
    name: "Yousef Mohamed",
    image: "/images/clients/client-1.jpg",
    title: "Frontend Developer",
  },
  {
    name: "Yousef Mohamed",
    image: "/images/clients/client-1.jpg",
    title: "Frontend Developer",
  },
  {
    name: "Yousef Mohamed",
    image: "/images/clients/client-1.jpg",
    title: "Frontend Developer",
  },
];
const OurTeam = async () => {
  const text = await getTranslations("ourTeam");
  return (
    <section className="container">
      <SectionHeading
        title={text("title")}
        subtitle={<>{text("paragraph")}</>}
      />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 ">
        {members.map((member, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="bg-muted aspect-square animate-pulse w-full" />

            <div className="py-4">
              <h4 className="text-lg font-bold">{member.name}</h4>
              <p className="text-sm text-gray-500">{member.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
