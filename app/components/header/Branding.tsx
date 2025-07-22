import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/transLogo.png";
/**
 * Branding component for displaying the logo, name, and slogan of the company.
 * This is typically used in the site's header for brand recognition and navigation.
 *
 * @component
 * @returns {JSX.Element} A clickable branding section that links to the homepage.
 */
export default function Branding() {
  return (
    <Link href="/">
      <div className="flex justify-start items-center gap-2">
        <Image
          src={logo}
          alt="amiran tajhiz logo"
          width={70}
          height={70}
          priority
        />
        <div className="flex flex-col justify-start items-start gap-1 text-[#003d5d]">
          <h2 className="font-bold text-xl font-messiri">امیران تجهیز</h2>
          <p className="text-xs">مراقبت از شما در هر مرحله از راه</p>
        </div>
      </div>
    </Link>
  );
}
