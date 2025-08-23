import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
interface PageHeaderProps {
  title: string;
  icon: IconProp;
}
/**
 * PageHeader renders a centered header section with an icon and title.
 * Useful for visually distinguishing sections or pages in the UI.
 *
 * @param {PageHeaderProps} props - Component props.
 * @returns {JSX.Element} A styled header with icon and title.
 */
export default function PageHeader({ title, icon }: PageHeaderProps) {
  return (
    <div className="flex justify-center items-center flex-col gap-2 w-full">
      <div className="flex justify-center items-center p-3 rounded-full bg-[#003d5d]/10 w-12 h-12">
        <FontAwesomeIcon icon={icon} className="text-2xl" />
      </div>
      <h1 className="font-semibold text-2xl font-messiri text-[#003d5d] mb-8">
        {title}
      </h1>
    </div>
  );
}
