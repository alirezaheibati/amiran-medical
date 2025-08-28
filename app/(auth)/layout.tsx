import type { Metadata } from "next";
import { El_Messiri, Vazirmatn } from "next/font/google";
import "../globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { verifyAuth } from "@/app/_lib/auth";
import { redirect } from "next/navigation";
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
 * Layout component for authentication-related pages (e.g. login/register).
 *
 * Behavior:
 * - Applies RTL layout and custom fonts.
 * - Redirects authenticated users to the homepage to prevent access to auth pages.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - Nested page content.
 * @returns {JSX.Element} The rendered layout for unauthenticated users.
 */
export default async function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { user } = await verifyAuth();

  if (user) {
    redirect("/");
  }
  return (
    <html lang="fa" dir="rtl">
      <body className={`${elMessiri.className} ${vazirmatn.className}`}>
        {children}
      </body>
    </html>
  );
}
