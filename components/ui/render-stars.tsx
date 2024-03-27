import React from "react";
import { ClassNameValue } from "tailwind-merge";
import { FaStar } from "react-icons/fa";
import { cn } from "@/lib/utils";
interface RenderStarsProps {
  rating: number;
  containerClassName?: ClassNameValue;
  starClassName?: ClassNameValue;
}
export const RenderStars: React.FC<RenderStarsProps> = ({
  rating,
  containerClassName,
  starClassName,
}) => {
  return (
    <div className={cn("flex items-center gap-1.5", containerClassName)}>
      {Array.from({ length: 5 }, (_, index) => {
        const starValue = index + 1;
        return (
          <FaStar
            key={index}
            className={cn("text-xl", starClassName, {
              "text-yellow-500": starValue <= rating,
              "text-gray-600": starValue > rating,
            })}
          />
        );
      })}
    </div>
  );
};
