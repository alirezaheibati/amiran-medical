/**
 * LoadingOverlay component displays a full-screen overlay with a spinning loader.
 *
 * @component
 * @returns {JSX.Element} A full-screen overlay with a centered spinning loader.
 */
export default function LoadingOverlay() {
  return (
    <div className="fixed h-screen w-screen top-0 left-0 right-0 flex justify-center items-center bg-gray-50 z-50">
      <div className="border-x-[#003d5d] border-[12px] border-transparent w-40 h-40 rounded-full animate-spin z-[70]"></div>
    </div>
  );
}
