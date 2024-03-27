"use client";
import { cn } from "@/lib/utils";
import { Link, usePathname } from "@/navigation";
import { ClassValue } from "clsx";
import { useTranslations } from "next-intl";
interface ChangeLocaleButtonProps {
  className?: ClassValue;
}
const ChangeLocaleButton: React.FC<ChangeLocaleButtonProps> = ({
  className,
}) => {
  const pathname = usePathname();
  const common = useTranslations("common");
  const locale = common("locale");
  return (
    <Link
      href={pathname}
      locale={locale === "ar" ? "en" : "ar"}
      className={cn("font-semibold", className)}
    >
      {locale === "ar" ? "En" : "Ar"}
      <span className="sr-only">{common("change_language")}</span>
    </Link>
  );
};

export default ChangeLocaleButton;
