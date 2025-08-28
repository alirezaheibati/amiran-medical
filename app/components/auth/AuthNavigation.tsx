import Image from "next/image";
import Link from "next/link";
import logo from "@/app/assets/transLogo.png";
/**
 * AuthNavigation component renders a fixed top navigation bar with logo and brand text.
 * Used primarily on authentication pages for consistent branding.
 *
 * @component
 * @returns {JSX.Element} A top-positioned logo and brand name with link to homepage
 */
export default function AuthNavigation() {
  return (
    <div className="absolute top-0 left-0 right-0 p-4 z-50">
      <Link href="/">
        <div className="flex justify-start items-center gap-2">
          <Image
            src={logo}
            alt="amiran tajhiz logo"
            width={70}
            height={70}
            priority
          />
          <div className="flex flex-col justify-start items-start gap-1 text-white/95">
            <h2 className="font-bold text-xl font-messiri">امیران تجهیز</h2>
            <p className="text-xs">مراقبت از شما در هر مرحله از راه</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
