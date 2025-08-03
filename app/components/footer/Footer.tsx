import Features from "./Features";
import CopyRight from "./CopyRight";
import About from "./About";
import ContactUs from "./ContactUs";
import ENamad from "./ENamad";
/**
 * Renders the main footer of the website, including:
 * - A list of features
 * - Company info and contact details
 * - eNamad trust seal
 * - Copyright notice
 *
 * The footer uses a custom background image and responsive grid layout,
 * and pulls together reusable components for a clean modular structure.
 *
 * @returns {JSX.Element} The complete website footer
 */
export default function Footer() {
  return (
    <footer
      style={{ backgroundImage: "url('footer.png')" }}
      className="bg-no-repeat bg-cover"
    >
      <div className="max-w-7xl mx-auto p-4">
        <Features />
        <div className="grid grid-cols-1 md:grid-cols-6 gap-10 py-8 text-[#003d5d]">
          <About />
          <ContactUs />
          <ENamad />
        </div>
      </div>
      <CopyRight />
    </footer>
  );
}
