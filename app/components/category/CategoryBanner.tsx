interface CategoryBannerProps {
  title: string;
  description: string;
}
/**
 * CategoryBanner component displays a styled banner with a title and description.
 * Typically used to highlight a category section in the UI with a gradient background.
 *
 * @component
 * @param {CategoryBannerProps} props - Props for the banner
 * @param {string} props.title - Title text displayed prominently
 * @param {string} props.description - Supporting description text
 * @returns {JSX.Element} A visually styled banner section
 */
export default function CategoryBanner({
  title,
  description,
}: CategoryBannerProps) {
  return (
    <div className="bg-gradient-to-r from-[#003d5b] to-[#00798c] rounded-2xl p-8 mb-4 text-white relative overflow-hidden">
      <div className="relative z-10">
        <h1 className="text-4xl font-bold mb-3">{title}</h1>
        <p className="text-lg text-white/80 max-w-2xl">{description}</p>
      </div>
    </div>
  );
}
