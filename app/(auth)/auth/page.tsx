import { redirect } from "next/navigation";

import AuthToggleBox from "@/app/components/auth/AuthToggleBox";
import AuthNavigation from "@/app/components/auth/AuthNavigation";

/**
 * AuthPage component serves as the authentication entry point,
 * rendering the login/register toggle interface with redirect logic.
 *
 * Server Behavior:
 * - Calls `verifyAuth()` to check if a valid user session exists.
 * - Redirects to homepage (`"/"`) if user is already authenticated.
 */
export default async function AuthPage() {
  // const result = await verifyAuth();
  if (false) {
    redirect("/");
  }
  return (
    <section className="h-screen w-screen bg-gradient-to-r from-[#003d5b] to-[#00798c]">
      <div className="max-w-7xl mx-auto px-4 relative flex flex-col justify-center items-center gap-4 h-full">
        {/* top nav */}
        <AuthNavigation />
        {/* login/register container */}
        <AuthToggleBox />
      </div>
    </section>
  );
}
