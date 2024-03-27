"use client";
import { Link } from "@/navigation";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import React from "react";
import { ICategoryWithServices } from "@/types";
import { useTranslations } from "next-intl";
const companyLinks = [
  {
    href: "/about-us",
    label: "about",
  },
  {
    href: "/contact-us",
    label: "contact",
  },
];
interface NavigationMenuDemoProps {
  categories: ICategoryWithServices[];
}
const NavigationMenuDemo: React.FC<NavigationMenuDemoProps> = ({
  categories,
}) => {
  const common = useTranslations("common");
  const locale = common("locale");
  const pages = useTranslations("pages");
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/">{pages("home")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{pages("company")}</NavigationMenuTrigger>
          <NavigationMenuContent className="rounded-none">
            <ul className="min-w-[200px]">
              {companyLinks.map((link, index) => (
                <li key={link.href}>
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.href}
                      className={cn("block hover:bg-accent/50 py-4 px-6", {
                        "border-b": index !== companyLinks.length - 1,
                      })}
                    >
                      {pages(link.label)}
                    </Link>
                  </NavigationMenuLink>
                </li>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>{pages("services")}</NavigationMenuTrigger>
          <NavigationMenuContent className="flex border-b-2 border-b-primary rounded-none gap-8 p-6">
            {categories.map((category) => (
              <div key={category._id} className="min-w-[200px]">
                <Link
                  href={`/category/${category._id}`}
                  className="text-lg font-semibold"
                >
                  {locale === "ar" ? category.title_ar : category.title_en}
                </Link>
                {category.services.map((service) => (
                  <NavigationMenuLink asChild key={service._id}>
                    <Link
                      href={`/services/${service._id}`}
                      className="block my-2 text-sm"
                    >
                      {locale === "ar" ? service.title_ar : service.title_en}
                    </Link>
                  </NavigationMenuLink>
                ))}
              </div>
            ))}
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
            <Link href="/portfolio">{pages("portfolio")}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavigationMenuDemo;
