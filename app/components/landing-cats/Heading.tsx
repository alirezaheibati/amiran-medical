/**
 * Renders a responsive heading section for category selection.
 *
 * Displays a main title and description text emphasizing the benefits
 * of selecting medical and hygiene products. Adapts layout for both
 * mobile and desktop screens using Flexbox.
 *
 * @component
 * @returns {JSX.Element} A styled section with heading and description
 */
export default function Heading() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-[#003d5d]">
      <h2 className="text-[#003d5d] text-xl font-semibold md:w-1/4">
        دسته بندی مورد نظر خود را انتخاب کنید
      </h2>
      <p className="text-center md:text-right">
        از بین هزاران محصول از بهترین برند ها، بزرگترین وارد کنندگان و قوی ترین
        تولید کنندگان کالا های پزشکی و بهداشتی مورد نیاز خود را با پایین ترین
        قیمت تهیه کرده و درب منزل تحویل بگیرید.
      </p>
    </div>
  );
}
