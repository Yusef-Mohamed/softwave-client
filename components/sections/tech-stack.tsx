import SectionHeading from "../ui/section-heading";

const sections = [
  {
    name: "Front-end Development",
    techs: [
      {
        name: "React",
        logo: "/images/react.png",
      },
      {
        name: "Next.js",
        logo: "/images/nextjs.png",
      },
      {
        name: "Tailwind CSS",
        logo: "/images/tailwindcss.png",
      },
      {
        name: "Tailwind CSS",
        logo: "/images/tailwindcss.png",
      },
    ],
  },
  {
    name: "Back-end Development",
    techs: [
      {
        name: "Node.js",
        logo: "/images/nodejs.png",
      },
      {
        name: "Express",
        logo: "/images/express.png",
      },
      {
        name: "MongoDB",
        logo: "/images/mongodb.png",
      },
      {
        name: "MongoDB",
        logo: "/images/mongodb.png",
      },
    ],
  },
  {
    name: "DevOps",
    techs: [
      {
        name: "Docker",
        logo: "/images/docker.png",
      },
      {
        name: "Kubernetes",
        logo: "/images/kubernetes.png",
      },
      {
        name: "AWS",
        logo: "/images/aws.png",
      },
      {
        name: "AWS",
        logo: "/images/aws.png",
      },
    ],
  },
];
const TechStack = () => {
  return (
    <section className="py-16">
      <div className="container">
        <SectionHeading
          title="TECH STACK"
          subtitle="We use the latest technologies to build modern applications."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => {
            return (
              <div key={index}>
                <h4 className="font-semibold text-lg text-muted-foreground w-fit">
                  <span>{section.name}</span>
                </h4>
                <div className="h-[2px] w-24 bg-primary my-4" />
                <div className="grid  grid-cols-2 lg:grid-cols-4 gap-4">
                  {section.techs.map((tech, index) => {
                    return (
                      <div
                        key={index}
                        className="border p-2 flex flex-col items-center justify-center rounded-xl"
                      >
                        <div className="w-3/4 mb-4 aspect-square rounded-xl  bg-muted" />
                        <span className="text-muted-foreground">
                          {tech.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
