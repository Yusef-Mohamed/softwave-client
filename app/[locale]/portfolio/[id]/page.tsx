import { projectsApi } from "@/apiFile";
import ProjectSlider from "@/components/sections/projects-slider";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import SectionHeading from "@/components/ui/section-heading";
import { ISample } from "@/types";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const { get } = projectsApi;
  const samples = (await get({
    cache: "no-cache",
  })) as ISample[];
  return samples.map((sample) => ({ id: sample._id }));
}
const getSample = async (id: string) => {
  const { get } = projectsApi;
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
const SamplePage = async ({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) => {
  unstable_setRequestLocale(locale);
  const sample = (await getSample(id)) as ISample;
  const common = await getTranslations("common");
  const isEn = common("locale") === "en";
  if (!sample) {
    notFound();
  }
  const images = [...sample.images, sample.imageCover];
  return (
    <main>
      <section className="py-16">
        <div className="container">
          <SectionHeading
            title={isEn ? sample.title_en : sample.title_ar}
            subtitle={
              <>{isEn ? sample.description_en : sample.description_ar} </>
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
    </main>
  );
};

export default SamplePage;
