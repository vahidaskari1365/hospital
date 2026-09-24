import type { Metadata } from "next";
import { Vazirmatn, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazirmatn",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "بیمارستان تخصصی شفای نوین | مرجع درمان تخصصی ایران",
  description:
    "بیمارستان تخصصی شفای نوین، مرجع درمان تخصصی با ۲۵ سال تجربه، ۸۰ پزشک متخصص برجسته و تجهیزات نسل جدید. کیفیت جهانی، شفقت ایرانی. نوبت‌دهی آنلاین ۲۴ ساعته.",
  keywords: [
    "بیمارستان تخصصی",
    "پزشک متخصص",
    "نوبت‌دهی آنلاین",
    "خدمات پزشکی",
    "اورژانس ۲۴ ساعته",
    "جراحی تخصصی",
    "چکاپ سلامت",
    "بیمارستان تهران",
    "ICU",
    "جراحی قلب",
  ],
  authors: [{ name: "بیمارستان شفای نوین" }],
  icons: {
    icon: "/logo.svg",
  },
  openGraph: {
    title: "بیمارستان تخصصی شفای نوین",
    description: "مرجع درمان تخصصی با کیفیت جهانی و شفقت ایرانی",
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
        className={`${vazirmatn.variable} ${playfair.variable} font-sans antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
        <SonnerToaster position="top-center" richColors />
      </body>
    </html>
  );
}
