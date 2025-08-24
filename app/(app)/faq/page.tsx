import { faCircleQuestion } from "@fortawesome/free-regular-svg-icons";
import PageHeader from "@/app/components/ui/PageHeader";
import Accordion from "@/app/components/ui/Accordion";
/**
 * FaqPage component displays a list of frequently asked questions (FAQs)
 * using the Accordion UI component for expandable answers.
 *
 * @component
 * @returns {JSX.Element} A styled FAQ section with multiple questions and answers
 */
export default function FaqPage() {
  return (
    <section className="max-w-7xl mx-auto px-4 mb-16 pt-8">
      <PageHeader title="پرسش‌های متداول" icon={faCircleQuestion} />
      <ul>
        <Accordion question="شرایط گارانتی امیران تجهیز">
          <p>
            امروزه توجه به کیفیت کالا از مهمترین وظایف فروشندگان کالا است و
            خدمات پس از فروش ضامن حفظ این کیفیت می باشد.
          </p>
          <p>
            در همین راستا امیران تجهیز مفتخر به ارائه سرویس در اسرع وقت به
            مشتریان گرامی می باشد.
          </p>
          <p>
            جهت سهولت در پیگیری گارانتی دستگاه خود می توانید از طریق شماره
            ۰۹۱۲۳۴۱۸۹۷۶ اقدام نمائید.
          </p>
        </Accordion>
        <Accordion question="چطور میتوانم سفارشم را لغو کنم ؟">
          <p>
            شما میتوانید با مراجعه به پروفایل خود سفارش یا مرسوله ایی که از
            ارسال آن منصرف شدید را لغو نمایید. میتوانید برای مشاهده روند لغو
            سفارش به توضیحات تکمیلی مراجعه کنید.
          </p>
        </Accordion>
        <Accordion question="هزینه ی ارسال چگونه محاسبه میشود؟">
          <p>
            هزینه ارسال بر اساس شیوه ارسال متفاوت است و در زمان ثبت سفارش نمایش
            داده می شود.
          </p>
        </Accordion>
        <Accordion question="شرایط استفاده از کد تخفیف اولین خرید چیست؟">
          <p>
            سیستم هوشمند امیران تجهیز، پس از بررسی حساب کاربری در صورتی که مالک
            آن مشتری جدید ما باشد، بصورت اتوماتیک تخفیف را اعمال میکند.
          </p>
        </Accordion>
        <Accordion question="چطور درخواست خود را جهت بازگرداندن کالا به شما اطلاع دهم؟">
          <p>
            شما میتوانید از طریق فرم درخواست مرجوعی در حساب کاربری ، صفحه تماس
            با ما و تلفن درخواست خود را ثبت نمایید.
          </p>
        </Accordion>
      </ul>
    </section>
  );
}
