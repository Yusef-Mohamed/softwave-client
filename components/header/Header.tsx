import React from "react";
import Image from "next/image";
import { FaSearch, FaUser } from "react-icons/fa";
import MobileHeading from "./MobileHeading";
import { Link } from "@/navigation";
import ChangeLocaleButton from "../change-locale-button";
import { categoriesApi, servicesApi } from "@/apiFile";
import { ICategoryWithServices, IService } from "@/types";
import NavigationMenuDemo from "./NavigationMenu";
import { getTranslations } from "next-intl/server";
async function fetchCategoriesWithServices() {
  const { get: getCategories } = categoriesApi;
  const { get: getServices } = servicesApi;
  try {
    const categories = (await getCategories({
      cache: "no-cache",
    })) as ICategoryWithServices[];
    const services = (await getServices({
      cache: "no-cache",
    })) as IService[];
    const categoriesWithServices = categories.map((category) => {
      const categoryServices = services.filter(
        (service) => service.category._id === category._id
      );
      return {
        ...category,
        services: categoryServices,
      };
    });
    return categoriesWithServices as ICategoryWithServices[];
  } catch (error) {
    console.error("Error fetching categories with services:", error);
    throw error;
  }
}

export default async function Header() {
  const categories = await fetchCategoriesWithServices();
  const common = await getTranslations("common");
  return (
    <header className="sticky z-10 top-0 border-b py-4 bg-background">
      <div className="flex container items-center gap-4 justify-between lg:justify-normal">
        <Image src="/logo.png" alt="logo" width={150} height={40} />
        <MobileHeading categories={categories} />
        <div className="w-full flex-1 hidden lg:flex justify-between items-center">
          <nav className="flex items-center gap-2">
            <NavigationMenuDemo categories={categories} />
          </nav>
          <div className="flex gap-4 items-center">
            <Link href="/login">
              <FaUser />
              <span className="sr-only">{common("login")}</span>
            </Link>
            <button>
              <FaSearch />
            </button>
            <ChangeLocaleButton />
          </div>
        </div>
      </div>
    </header>
  );
}
