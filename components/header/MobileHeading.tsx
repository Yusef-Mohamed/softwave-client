"use client";
import { FaBars } from "react-icons/fa";
import { Button } from "../ui/button";
import { Sheet, SheetContent } from "../ui/sheet";
import { useState } from "react";
import { ICategoryWithServices } from "@/types";
import { useTranslations } from "next-intl";
interface MobileHeadingProps {
  categories: ICategoryWithServices[];
}
const MobileHeading: React.FC<MobileHeadingProps> = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  const common = useTranslations("common");
  return (
    <>
      {" "}
      <Button
        type="button"
        aria-label={common("open_menu")}
        onClick={() => setIsOpen(true)}
        className="lg:hidden"
        variant={"outline"}
      >
        <FaBars />
      </Button>
      <Sheet onOpenChange={(open) => setIsOpen(open)} open={isOpen}>
        <SheetContent></SheetContent>
      </Sheet>
    </>
  );
};

export default MobileHeading;
