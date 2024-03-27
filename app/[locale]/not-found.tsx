import { Button } from "@/components/ui/button";
import { Link } from "@/navigation";
import { useTranslations } from "next-intl";

const NotFound = () => {
  const text = useTranslations("notFound");
  return (
    <main>
      <section className="min-h-[50vh] flex flex-col items-center justify-center container">
        <h1 className="text-5xl font-bold">{text("title")}</h1>
        <p className="mt-6 mb-4 max-w-xl text-center">{text("paragraph")}</p>
        <Button asChild size={"lg"}>
          <Link href={"/"}>{text("button")}</Link>
        </Button>
      </section>
    </main>
  );
};

export default NotFound;
