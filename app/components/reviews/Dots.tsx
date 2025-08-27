"use client";
interface DotProps {
  // The index or identifier of the dot
  dotNumber: number;
  // Callback function triggered when the dot is selected
  onSelectDot: (dotNumber: number) => void;
  // Indicates whether this dot is currently active
  activeDot: boolean;
}
/**
 * `Dots` renders a single dot used for pagination or carousel indicators.
 * The dot changes size and color based on its active state and triggers a selection callback when clicked.
 *
 * @component
 * @param {DotProps} props - Props containing dot index, selection handler, and active state.
 * @returns {JSX.Element} A styled dot element with interactive behavior.
 */
export default function Dots({ dotNumber, onSelectDot, activeDot }: DotProps) {
  return (
    <div
      className={`h-3 rounded-full cursor-pointer transition-[width] duration-200 ${
        activeDot ? " w-6 bg-[#003d5b]" : " w-3 bg-slate-300"
      }`}
      onClick={() => onSelectDot(dotNumber)}
    ></div>
  );
}
