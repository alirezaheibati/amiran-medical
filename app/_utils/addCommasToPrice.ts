/**
 * Adds commas to item price, grouping characters in sets of three from right to left.
 *
 * @param {string} input - The price in string to format.
 * @returns {string} - The formatted price with comma separators each three number.
 */
export default function addCommasToString(input: string): string {
  const reversed: string = input.split("").reverse().join("");
  const formatted: string = reversed.match(/.{1,3}/g)?.join(",") || "";
  return formatted.split("").reverse().join("");
}
