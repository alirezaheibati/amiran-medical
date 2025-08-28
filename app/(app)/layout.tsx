import type { Metadata } from "next";
import { El_Messiri, Vazirmatn } from "next/font/google";
import "../globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Providers from "../_store/Providers";
import { verifyAuth } from "@/app/_lib/auth";
config.autoAddCss = false;

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
  icons: {
    icon: "/favicon.png",
  },
};
/**
 * Root layout component wrapping all pages.
 * Applies global fonts, RTL direction, and renders header, footer, and authenticated user context.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Nested page content.
 * @returns {JSX.Element} The complete HTML layout structure.
 */
export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user: loggedInUser } = await verifyAuth();
  return (
    <html lang="fa" dir="rtl">
      <body className={`${elMessiri.className} ${vazirmatn.className}`}>
        <Providers>
          <Header loggedInUser={loggedInUser} />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
