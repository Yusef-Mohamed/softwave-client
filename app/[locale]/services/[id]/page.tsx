import { servicesApi } from "@/apiFile";
import ProjectSlider from "@/components/sections/projects-slider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import SectionHeading from "@/components/ui/section-heading";
import { IService } from "@/types";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Suspense } from "react";

export async function generateStaticParams() {
  const { get } = servicesApi;
  const services = (await get({
    cache: "no-cache",
  })) as IService[];
  return services.map((service) => ({ id: service._id }));
}
const getService = async (id: string) => {
  const { get } = servicesApi;
  try {
    return await get(
      {
        cache: "no-cache",
      },
      `/${id}`
    );
  } catch (error) {
    console.error(error);
  }
};
const ServicePage = async ({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) => {
  unstable_setRequestLocale(locale);
  const service = (await getService(id)) as IService;
  const common = await getTranslations("common");
  const isEn = common("locale") === "en";
  if (!service) {
    notFound();
  }
  const images = [...service.images, service.imageCover];
  return (
    <main>
      <Suspense>
        <section className="py-16">
          <div className="container">
            <SectionHeading
              title={isEn ? service.title_en : service.title_ar}
              subtitle={
                <>{isEn ? service.description_en : service.description_ar} </>
              }
            />
            <Carousel>
              <CarouselContent>
                {images.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="w-full aspect-video relative bg-muted"
                  >
                    <Image
                      src={image}
                      alt={image}
                      className="w-full h-96 object-cover"
                      fill
                    />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </section>
        <ProjectSlider />
      </Suspense>
    </main>
  );
};

export default ServicePage;
