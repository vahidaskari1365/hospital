import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "بیمارستان تخصصی شفای نوین | مراقبت جامع، اعتماد همیشگی",
  description:
    "بیمارستان تخصصی شفای نوین با بیش از ۲۵ سال تجربه، ارائه‌دهنده خدمات تخصصی پزشکی شامل بخش‌های مختلف درمانی، پزشکان مجرب، تجهیزات پیشرفته و نوبت‌دهی آنلاین. کیفیت درمان، آرامش شما.",
  keywords: [
    "بیمارستان",
    "درمانگاه",
    "پزشک متخصص",
    "نوبت‌دهی آنلاین",
    "خدمات پزشکی",
    "اورژانس",
    "جراحی",
    "چکاپ",
    "بیمارستان تهران",
  ],
  authors: [{ name: "بیمارستان شفای نوین" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "بیمارستان تخصصی شفای نوین",
    description: "مراقبت جامع، اعتماد همیشگی - خدمات پزشکی تخصصی با کادر مجرب",
    siteName: "بیمارستان شفای نوین",
    type: "website",
    locale: "fa_IR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body
        className={`${vazirmatn.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SonnerToaster position="top-center" richColors />
      </body>
    </html>
  );
}
