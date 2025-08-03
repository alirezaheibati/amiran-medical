/**
 * Displays the About section describing the Amiran Tajhiz platform.
 * Includes a heading and a descriptive paragraph in Persian,
 * communicating the brand’s mission and service priorities.
 *
 * @returns {JSX.Element} A styled About section
 */
export default function About() {
  return (
    <div className="col-span-2 md:col-span-3 ">
      <div className="flex justify-start items-center gap-2 mb-2">
        <span className="block w-2 h-2 bg-[#003d5d] rounded-full"></span>
        <h2 className=" font-semibold text-xl">امیران تجهیز</h2>
      </div>
      <p className="text-sm">
        امیران تجهیز در راستای سهولت خرید و دسترسی عموم مردم به کلیه نیازهای
        پزشکی و درمانی، اقدام به توسعه پرتال الکترونیک نموده است. تامین مطمئن،
        سریع و اقتصادی نیاز کاربران با بالاترین کیفیت کالائی و خدماتی از
        اولویتهای امیران تجهیز میباشند.
      </p>
    </div>
  );
}
