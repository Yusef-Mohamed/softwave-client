import { categoriesApi } from "@/apiFile";
import OurServices from "@/components/sections/our-services";
import ProjectSlider from "@/components/sections/projects-slider";
import { ICategory } from "@/types";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
export async function generateStaticParams() {
  const { get } = categoriesApi;
  const categories = (await get({
    cache: "no-cache",
  })) as ICategory[];
  return categories.map((category) => ({ id: category._id }));
}
const getCategory = async (id: string) => {
  const { get } = categoriesApi;
  try {
    return await get(
      {
        cache: "no-cache",
      },
      `/${id}`
    );
  } catch (error) {
    console.error(error);
  }
};
const CategoryPage = async ({
  params: { locale, id },
}: {
  params: { locale: string; id: string };
}) => {
  unstable_setRequestLocale(locale);
  const category = await getCategory(id);
  const common = await getTranslations("common");
  const isEn = common("locale") === "en";
  return (
    <main>
      <section className="bg-muted py-16">
        <div className="container">
          <h1 className="text-5xl font-semibold text-primary text-center">
            {isEn ? category.title_en : category.title_ar}
          </h1>
        </div>
      </section>
      <OurServices />
      <ProjectSlider />
    </main>
  );
};

export default CategoryPage;
