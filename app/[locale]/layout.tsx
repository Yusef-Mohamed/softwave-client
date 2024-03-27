import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

const inter = Inter({ subsets: ["latin"] });

export async function generateMetadata({
  params,
}: {
  params: { locale: string };
}): Promise<Metadata> {
  if (params.locale === "ar") {
    return {
      title: "SoftWave solutions",
      description:
        "مرحبًا بك في حلول سوفت ويف - بوابتك إلى التميز الرقمي قم بتمكين عملك من خلال مجموعتنا الشاملة من الحلول الرقمية. من الروبوتات الابتكارية على تطبيق تليجرام إلى المواقع الإلكترونية الجذابة واستراتيجيات التسويق الفعالة، تعتبر حلول سوفت ويف شريكك الموثوق للتنقل في المشهد الرقمي. دعنا نحول رؤيتك إلى واقع وندفع نحو النجاح معًا.",
    };
  } else {
    return {
      title: "SoftWave solutions",
      description:
        "Welcome to SoftWave Solutions - Your Gateway to Digital Excellence Empower your business with our comprehensive suite of digital solutions. From innovative Telegram bots to captivating websites and impactful marketing strategies, SoftWave Solutions is your trusted partner for navigating the digital landscape. Let's transform your vision into reality and drive success together.",
    };
  }
}

const locales = ["en", "ar"];
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export default function RootLayout({
  children,
  params: { locale },
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  unstable_setRequestLocale(locale);
  const messages = useMessages();

  return (
    <html
      lang={locale}
      style={{
        direction: locale === "ar" ? "rtl" : "ltr",
      }}
    >
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
