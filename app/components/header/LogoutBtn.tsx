"use client";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
/**
 * LogoutBtn component renders a logout button with an icon and label.
 * On click, it prompts the user for confirmation and triggers a logout request.
 * After successful logout, it redirects the user to the authentication page.
 *
 * @component
 * @returns {JSX.Element} A button element for logging out
 */
export default function LogoutBtn() {
  const router = useRouter();

  async function userLogoutHandler() {
    if (confirm("از خروج از حسابتان اطمینان دارید؟")) {
      await fetch("/api/logout", { method: "POST" });
      router.push("/auth");
    }
  }

  return (
    <button
      onClick={userLogoutHandler}
      className="flex justify-center items-center gap-2 cursor-pointer"
    >
      <FontAwesomeIcon icon={faArrowRightFromBracket} />
      <p>خروج</p>
    </button>
  );
}
