import SingleFeature from "./SingleFeature";
import cartImg from "@/app/assets/cart.png";
import payImg from "@/app/assets/wallet.png";
import guaranteeImg from "@/app/assets/comment.png";
import suppImg from "@/app/assets/talk.png";
/**
 * Renders the Features section containing multiple service highlights.
 * Each feature includes an icon, title, and description.
 *
 * @returns {JSX.Element} The rendered Features component
 */
export default function Features() {
  return (
    <>
      <div className="flex justify-between items-center flex-wrap py-8">
        <SingleFeature
          title="ارسال سریع"
          img={cartImg}
          description="ارسال به کل کشور"
        />
        <SingleFeature
          title="درگاه امن"
          img={payImg}
          description="امکان پرداخت آنلاین"
        />
        <SingleFeature
          title="پشتیبانی دائم"
          img={suppImg}
          description="مشاوره ۲۴ ساعته"
        />
        <SingleFeature
          title="اصالت کالا"
          img={guaranteeImg}
          description="ضمانت تمامی کالاها"
        />
      </div>
    </>
  );
}
