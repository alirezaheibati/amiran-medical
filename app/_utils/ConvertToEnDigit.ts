/**
 * Converts Persian digits to English digits using a predefined mapping.
 *
 * @param {string} input - A string containing Persian digits.
 * @returns {string} - The converted string with English numerals.
 */
export function convertToEnglishDigits(input: string): number {
  const persianToEnglishMap: Record<string, string> = {
    "۰": "0",
    "۱": "1",
    "۲": "2",
    "۳": "3",
    "۴": "4",
    "۵": "5",
    "۶": "6",
    "۷": "7",
    "۸": "8",
    "۹": "9",
  };
  return Number(input.replace(/[۰-۹]/g, (digit) => persianToEnglishMap[digit]));
}
