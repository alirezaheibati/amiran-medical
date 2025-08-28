interface SortItemRowProps {
  id: string;
  title: string;
  activeSort: string;
  onSelectSort: (identifier: string) => void;
}
/**
 * SortItemRow component renders a single radio option for sorting items.
 * Highlights the active sort and triggers a callback when selected.
 *
 * @component
 * @param {SortItemRowProps} props - Props including sort ID, title, active state, and selection handler
 * @returns {JSX.Element} A styled radio input with label for sorting
 */
export default function SortItemRow({
  id,
  title,
  activeSort,
  onSelectSort,
}: SortItemRowProps) {
  return (
    <li>
      <input
        type="radio"
        name="sorting"
        value={id}
        id={id}
        className="hidden"
        checked={id === activeSort}
        onChange={() => onSelectSort(id)}
      />
      <label
        htmlFor={id}
        className={`text-sm cursor-pointer ${
          activeSort === id ? "text-[#ef394e]" : "text-black/70"
        }`}
      >
        {title}
      </label>
    </li>
  );
}
