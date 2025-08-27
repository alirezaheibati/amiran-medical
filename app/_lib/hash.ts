import crypto from "node:crypto";
/**
 * Hashes a plain-text password using the scrypt algorithm and a randomly generated salt.
 *
 * @param password - The plain-text password to be securely hashed.
 * @returns A string in the format `<hashedPassword>:<salt>`.
 */
export function hashUserPassword(password: string) {
  const salt = crypto.randomBytes(16).toString("hex");

  const hashedPassword = crypto.scryptSync(password, salt, 64);
  return hashedPassword.toString("hex") + ":" + salt;
}
/**
 * Verifies a supplied plain-text password against a securely stored hashed password.
 *
 * @param storedPassword - The password from the database in the format `<hashedPassword>:<salt>`.
 * @param suppliedPassword - The plain-text password entered by the user.
 * @returns A boolean indicating whether the passwords match.
 */

export function verifyPassword(
  storedPassword: string,
  suppliedPassword: string
) {
  const [hashedPassword, salt] = storedPassword.split(":");

  const hashedPasswordBuf = Buffer.from(hashedPassword, "hex");
  const suppliedPasswordBuf = crypto.scryptSync(suppliedPassword, salt, 64);
  console.log(crypto.timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf));
  return crypto.timingSafeEqual(hashedPasswordBuf, suppliedPasswordBuf);
}
