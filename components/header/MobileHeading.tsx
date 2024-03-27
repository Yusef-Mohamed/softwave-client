"use client";
import { FaBars } from "react-icons/fa";
import { Button } from "../ui/button";
import { Sheet, SheetContent } from "../ui/sheet";
import { useState } from "react";
import { ICategoryWithServices } from "@/types";
interface MobileHeadingProps {
  categories: ICategoryWithServices[];
}
const MobileHeading: React.FC<MobileHeadingProps> = ({ categories }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      {" "}
      <Button
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
