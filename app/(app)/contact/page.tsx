"use client";
import bgImage from "@/app/assets/contact-bg.png";
import dynamic from "next/dynamic";
import WriteFotUs from "@/app/components/contact-us/WriteFotUs";
import ContactImage from "@/app/components/contact-us/ContactImage";
import ContactDetails from "@/app/components/contact-us/ContactDetails";

/**
 * Dynamically imports the BasicMap component to prevent server-side rendering.
 * This is necessary because Leaflet depends on browser-specific APIs.
 */
const DynamicMap = dynamic(() => import("@/app/components/map/BasicMap"), {
  ssr: false,
});
/**
 * The main contact page component.
 * Combines visual branding, contact information, a feedback form, and an interactive map.
 *
 * @returns {JSX.Element} A fully styled contact page layout.
 */
export default function ContactUsPage() {
  return (
    <section>
      <div
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        <div className="max-w-7xl mx-auto p-4">
          <div className="flex flex-col md:flex-row justify-start items-center">
            <ContactImage />
            <ContactDetails />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-8 border border-gray-200 rounded-xl mb-8 flex flex-col justify-center items-center md:flex-row gap-4">
        <div className="flex-1/2 border border-gray-200 rounded-xl p-4">
          <WriteFotUs />
        </div>
        <div className="flex-1/2 w-full rounded-xl overflow-hidden">
          <DynamicMap
            lat={36.672639}
            lng={48.483892}
            popuoMsg={"ما اینجاییم"}
          />
        </div>
      </div>
    </section>
  );
}
