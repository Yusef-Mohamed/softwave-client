import ClientsWrapper from "@/components/sections/clients-wrapper";
import { HeroParallaxDemo } from "@/components/sections/hero-section";
import OurClientsFeedBack from "@/components/sections/our-clients-feedback";
import OurServices from "@/components/sections/our-services";
import OurTeam from "@/components/sections/our-team";
import ProjectSlider from "@/components/sections/projects-slider";
import TechStack from "@/components/sections/tech-stack";
import { unstable_setRequestLocale } from "next-intl/server";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return (
    <main>
      <HeroParallaxDemo />
      <OurServices />
      <TechStack />
      <ClientsWrapper />
      <ProjectSlider />
      <OurClientsFeedBack />
      <OurTeam />
    </main>
  );
}
