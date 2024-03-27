import { getTranslations } from "next-intl/server";
import { CiFaceSmile } from "react-icons/ci";

const ClientsWrapper = async () => {
  const text = await getTranslations("clientsWrapper");
  return (
    <section className=" bg-muted">
      <div className="container">
        <div className="grid md:grid-cols-3 divide-y md:divide-x-2 md:divide-y-0">
          <div className="flex items-center gap-6 px-6 py-6 md:py-10 justify-center md:justify-normal">
            <CiFaceSmile className="text-5xl text-primary" />
            <div>
              <b className="text-2xl">1790</b>
              <h4 className="text-lg">{text("happy_clients")}</h4>
            </div>
          </div>
          <div className="flex items-center gap-6 px-6 py-6 md:py-10 justify-center md:justify-normal">
            <CiFaceSmile className="text-5xl text-primary" />
            <div>
              <b className="text-2xl">1790</b>
              <h4 className="text-lg">{text("happy_clients")}</h4>
            </div>
          </div>
          <div className="flex items-center gap-6 px-6 py-6 md:py-10 justify-center md:justify-normal">
            <CiFaceSmile className="text-5xl text-primary" />
            <div>
              <b className="text-2xl">1790</b>
              <h4 className="text-lg">{text("happy_clients")}</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientsWrapper;
