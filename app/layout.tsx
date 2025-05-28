import type { Metadata } from "next";
import { El_Messiri, Vazirmatn } from "next/font/google";
import "./globals.css";

const elMessiri = El_Messiri({
  subsets: ["latin"],
  weight: ["400", "700"],
});
const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  weight: ["400", "900"],
});
export const metadata: Metadata = {
  title: "Amirean medical",
  description: "Amiran Medical pharmaceutical shop active in Zanjan province",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${elMessiri.className} ${vazirmatn.className}`}>
        {children}
      </body>
    </html>
  );
}
