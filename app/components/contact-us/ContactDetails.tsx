import { faEnvelope, faMap } from "@fortawesome/free-regular-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import ContactDetailItem from "./ContactDetailItem";

/**
 * A section component that displays contact information for Amiran Tajhiz.
 * Includes a company description and multiple contact detail blocks.
 *
 * @returns {JSX.Element} A styled contact information section.
 */
export default function ContactDetails() {
  return (
    <div className="w-full md:w-2/3 py-4 text-[#003d5d]">
      <div>
        <h2 className="font-messiri text-2xl font-semibold mt-4 mb-2 flex justify-start items-center gap-2">
          <span className="bg-[#003d5d] w-3 h-3 block rounded-full shadow-md"></span>
          تماس با ما
        </h2>
        <p className="text-sm">
          ما در امیران تجهیز سعی داریم تا متنوع‌ترین و با کیفیت ترین لوازم
          بهداشتی و تجهیزات پزشکی بیمارستانی، درمانگاهی، مطب و کلینیک های
          درمانی، همچنین تجهیزات مصرفی و لوازم پزشکی خانگی مناسب بیمار در منزل
          را ارائه دهیم.هدف سایت فروش تجهیزات پزشکی امیران تجهیز ، معرفی کالای
          درمانی، پزشکی، سلامت و بهداشتی با بهترین کیفیت و قیمت بدون واسطه، به
          خصوص برای مراکز درمانی است.​​​​​​​
        </p>
      </div>
      <ContactDetailItem icon={faHeadphones} title="پشتیبانی تلفنی">
        <p>۰۲۴-۳۳۴۶۷۴۹۰</p>
        <p>۰۹۱۲۳۴۱۸۹۷۶</p>
        <p>۰۹۳۵۳۴۱۸۹۷۶</p>
      </ContactDetailItem>

      <ContactDetailItem icon={faEnvelope} title="ایمیل">
        <p>znj.amiran.medical@gmail.com</p>
      </ContactDetailItem>

      <ContactDetailItem icon={faMap} title="آدرس">
        <p>زنجان، خیابان سعدی وسط، پاساژ شهرراز، طبقه اول، واحد f46</p>
      </ContactDetailItem>
    </div>
  );
}
