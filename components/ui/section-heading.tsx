import React from "react";

interface SectionHeadingProps {
  title: string;
  subtitle: React.ReactNode;
}
const SectionHeading: React.FC<SectionHeadingProps> = ({ title, subtitle }) => {
  return (
    <>
      <h2 className="text-center text-4xl uppercase font-semibold ">{title}</h2>
      <p className="text-center font-semibold text-muted-foreground  mx-auto mb-10 mt-4 max-w-2xl">
        {subtitle}
      </p>
    </>
  );
};

export default SectionHeading;
