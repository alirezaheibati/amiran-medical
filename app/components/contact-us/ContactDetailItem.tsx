import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type ContactDetailItemProps = {
  icon: IconProp;
  title: string;
  children: React.ReactNode;
};
/**
 * A reusable component for displaying a contact detail section with an icon, title, and content.
 *
 * @param {ContactDetailItemProps} props - Props containing icon, title, and children.
 * @returns {JSX.Element} A styled contact detail block.
 */
export default function ContactDetailItem({
  icon,
  title,
  children,
}: ContactDetailItemProps) {
  return (
    <div>
      <h2 className="font-semibold mt-4 mb-2 flex justify-start items-center gap-2">
        <FontAwesomeIcon icon={icon} />
        {title}
      </h2>
      {children}
    </div>
  );
}
