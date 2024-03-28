import { FaLaptopCode } from "react-icons/fa";
import SectionHeading from "../ui/section-heading";
import { Link } from "@/navigation";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { IService } from "@/types";
import { servicesApi } from "@/apiFile";
import { getTranslations } from "next-intl/server";
const getServices = async () => {
  const { get } = servicesApi;
  try {
    const services = await get({
      cache: "no-cache",
    });
    return services;
  } catch (error) {
    console.error("Error fetching services:", error);
    throw error;
  }
};
const OurServices = async () => {
  const services = (await getServices()) as IService[];
  const common = await getTranslations("common");
  const text = await getTranslations("servicesSection");
  const isEn = common("locale") === "en";
  return (
    <section className="py-16 container">
      <SectionHeading
        title={text("title")}
        subtitle={<>{text("paragraph")}</>}
      />
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-4">
        {services.map((service, index) => {
          return (
            <div
              key={index}
              className="flex group overflow-hidden gap-8 hover:-translate-y-4 p-4 transition-all my-shadow-hover"
            >
              <div className="text-4xl">
                <FaLaptopCode />
              </div>
              <div>
                <h3 className="font-semibold mb-3">
                  {isEn ? service.title_en : service.title_ar}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {isEn ? service.description_en : service.description_ar}
                </p>
                <Link
                  href={`/services/${service._id}`}
                  className="text-sm font-semibold items-center mt-4 text-primary  flex gap-2"
                >
                  {text("learn_more")}
                  <FaArrowRightLong className="group-hover:translate-x-2 transition-all duration-150 enOnly" />
                  <FaArrowLeftLong className="group-hover:-translate-x-2 transition-all duration-150 arOnly" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default OurServices;
