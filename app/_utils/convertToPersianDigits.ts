/**
 * Converts English digits to Persian digits using a predefined mapping.
 *
 * @param {number} input - The number to convert.
 * @returns {string} - The converted string with Persian numerals.
 */
export function convertToPersianDigits(input: number): string {
  const englishToPersianMap: Record<string, string> = {
    "0": "۰",
    "1": "۱",
    "2": "۲",
    "3": "۳",
    "4": "۴",
    "5": "۵",
    "6": "۶",
    "7": "۷",
    "8": "۸",
    "9": "۹",
  };
  return String(input).replace(/\d/g, (digit) => englishToPersianMap[digit]);
}
