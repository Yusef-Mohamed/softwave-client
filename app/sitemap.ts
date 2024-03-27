import { categoriesApi, projectsApi, servicesApi } from "@/apiFile";
import { getUrlFromPath } from "@/lib/utils";
import { ICategory, ISample, IService } from "@/types";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const locales = ["en", "ar"];
  const entries = ["/", "/contact-us", "/portfolio"];
  const { get: getSamples } = projectsApi;
  const samples = (await getSamples({ cache: "no-cache" })) as ISample[];
  const { get: getCategories } = categoriesApi;
  const categories = (await getCategories({
    cache: "no-cache",
  })) as ICategory[];
  const { get: getServices } = servicesApi;
  const services = (await getServices({ cache: "no-cache" })) as IService[];
  samples.forEach((sample) => {
    entries.push(`/portfolio/${sample._id}`);
  });
  categories.forEach((category) => {
    entries.push(`/category/${category._id}`);
  });
  services.forEach((service) => {
    entries.push(`/service/${service._id}`);
  });
  let entriesWithLocale: string[] = [];
  locales.forEach((locale) => {
    entries.forEach((entry) => {
      entriesWithLocale.push(`/${locale}${entry}`);
    });
  });
  const formattedEntries: {
    url: string;
  }[] = entriesWithLocale.map((entry) => {
    return {
      url: getUrlFromPath(entry),
    };
  });
  return [...formattedEntries];
}
