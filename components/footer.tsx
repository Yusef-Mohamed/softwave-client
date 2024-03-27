import { getTranslations } from "next-intl/server";
import Image from "next/image";

const Footer = async () => {
  const text = await getTranslations("footer");
  return (
    <footer className="bg-muted pt-16">
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 container pb-4">
        <div className="sm:p-4 col-span-2 lg:col-span-1">
          <Image src="/logo.png" alt="logo" width={150} height={40} />
          <p className="my-4">{text("paragraph")}</p>
          <a href="" className="text-primary my-4 block hover:font-semibold">
            email@gmail.com
          </a>
          <a href="" className="text-primary my-4 block hover:font-semibold">
            (+20) 10564456465
          </a>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 col-span-2">
          <div className="sm:p-4">
            <h4 className="font-semibold mb-4">{text("company")}</h4>
            <ul className="space-y-2">
              <li className="text-gray-700">{text("company_link")}</li>
              <li className="text-gray-700">{text("company_link")}</li>
              <li className="text-gray-700">{text("company_link")}</li>
            </ul>
          </div>
          <div className="sm:p-4">
            <h4 className="font-semibold mb-4">{text("company")}</h4>
            <ul className="space-y-2">
              <li className="text-gray-700">{text("company_link")}</li>
              <li className="text-gray-700">{text("company_link")}</li>
              <li className="text-gray-700">{text("company_link")}</li>
            </ul>
          </div>
          <div className="sm:p-4">
            <h4 className="font-semibold mb-4">{text("company")}</h4>
            <ul className="space-y-2">
              <li className="text-gray-700">{text("company_link")}</li>
              <li className="text-gray-700">{text("company_link")}</li>
              <li className="text-gray-700">{text("company_link")}</li>
            </ul>
          </div>
          <div className="sm:p-4">
            <h4 className="font-semibold mb-4">{text("company")}</h4>
            <ul className="space-y-2">
              <li className="text-gray-700">{text("company_link")}</li>
              <li className="text-gray-700">{text("company_link")}</li>
              <li className="text-gray-700">{text("company_link")}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container flex justify-between items-center py-4 border-t">
        <span>© 2023 SoftWave. All Rights Reserved</span>
        <div>payment image here</div>
      </div>
    </footer>
  );
};

export default Footer;
