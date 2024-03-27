import { projectsApi } from "@/apiFile";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/ui/section-heading";
import { cn } from "@/lib/utils";
import { Link } from "@/navigation";
import { ISample } from "@/types";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";

const getProjects = async () => {
  const { get } = projectsApi;
  const projects = await get({
    cache: "no-cache",
  });
  return projects;
};
const Portfolio = async ({
  params: { locale },
}: {
  params: { locale: string };
}) => {
  unstable_setRequestLocale(locale);
  const projects = (await getProjects()) as ISample[];
  const common = await getTranslations("common");
  const text = await getTranslations("projectsSlider");
  const isEn = common("locale") === "en";
  return (
    <main>
      <section className="py-16 container">
        <SectionHeading
          title="Our Projects"
          subtitle="Take a look at some of our recent projects."
        />
        {projects.map((project, index) => (
          <div
            key={index}
            className="grid items-center grid-cols-2 gap-12 py-8"
          >
            <div
              className={cn({
                "order-1": index % 2 === 0,
                "order-2": index % 2 !== 0,
              })}
            >
              <h3 className="text-2xl font-bold ">
                {isEn ? project.title_en : project.title_ar}
              </h3>
              <p className="text-gray-500 mb-6 my-6">
                {isEn ? project.description_en : project.description_ar}
              </p>
              <Button asChild size={"lg"}>
                <Link href={`/portfolio/${project._id}`}>
                  {text("see_details")}
                </Link>
              </Button>
            </div>
            <div
              className={cn(
                `relative aspect-video bg-muted overflow-hidden rounded-lg shadow-lg`,
                {
                  "order-1": index % 2 !== 0,
                  "order-2": index % 2 === 0,
                }
              )}
            >
              <Image
                src={project.imageCover}
                alt={isEn ? project.title_en : project.title_ar}
                fill
              />
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Portfolio;
