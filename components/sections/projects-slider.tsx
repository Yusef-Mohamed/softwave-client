import { projectsApi } from "@/apiFile";
import SectionHeading from "../ui/section-heading";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { ISample } from "@/types";
import Image from "next/image";
import { Button } from "../ui/button";
import { FaEye } from "react-icons/fa";
import { Suspense } from "react";
import { getTranslations } from "next-intl/server";
import { Link } from "@/navigation";
const getProjects = async () => {
  const { get } = projectsApi;
  try {
    const projects = await get({
      cache: "no-cache",
    });
    return projects;
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
const ProjectSlider = async () => {
  const text = await getTranslations("projectsSlider");
  const common = await getTranslations("common");
  const isEn = common("locale") === "en";
  const projects = (await getProjects()) as ISample[];
  return (
    <section className="py-16 container">
      <SectionHeading
        title={text("title")}
        subtitle={<>{text("paragraph")}</>}
      />
      <Carousel>
        <CarouselContent>
          <Suspense>
            {projects.map((project) => (
              <CarouselItem
                key={project._id}
                className="md:basis-1/2 lg:basis-1/3"
              >
                <div className="relative w-full bg-muted aspect-square">
                  <Image
                    src={project.imageCover}
                    alt={isEn ? project.title_en : project.title_ar}
                    fill
                  />
                </div>
                <div className="px-4">
                  <h4 className="font-semibold mt-4 text-lg">
                    {isEn ? project.title_en : project.title_ar}
                  </h4>
                  <p className="text-muted-foreground line-clamp-3">
                    {isEn ? project.description_en : project.description_ar}
                  </p>
                  <Button
                    asChild
                    className="w-full flex items-center justify-center gap-4 mt-4"
                  >
                    <Link href={`/portfolio/${project._id}`}>
                      <span>{text("see_details")}</span> <FaEye size={20} />
                    </Link>
                  </Button>
                </div>
              </CarouselItem>
            ))}
          </Suspense>
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default ProjectSlider;
