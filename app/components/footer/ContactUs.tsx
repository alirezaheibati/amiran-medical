/**
 * Displays the contact information section for Amiran Tajhiz.
 * Includes address, phone numbers, and email details in Persian,
 * formatted with Tailwind CSS for styling and layout consistency.
 *
 * @returns {JSX.Element} A responsive section showing contact details
 */
export default function ContactUs() {
  return (
    <div className="col-span-2 md:col-span-2">
      <div className="flex justify-start items-center gap-2 mb-2">
        <span className="block w-2 h-2 bg-[#003d5d] rounded-full"></span>
        <h2 className=" font-semibold text-xl">تماس با ما</h2>
      </div>
      <div className="text-[#003d5d] [&_span]:opacity-50 [&_span]:font-medium [&_p]:mb-2 text-sm font-semibold ">
        <p>
          آدرس:{" "}
          <span>زنجان، خیابان سعدی وسط، پاساژ آریا، طبقه اول واحد f46</span>
        </p>
        <p>
          تلفن: <span>۰۲۴۳۳۴۶۷۴۹۰ - ۰۹۱۲۳۱۴۸۹۷۶ - ۰۹۳۵۳۴۱۸۹۷۶</span>
        </p>
        <p>
          ایمیل: <span>znj.amiran.medical@google.com</span>
        </p>
      </div>
    </div>
  );
}
