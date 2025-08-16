/**
 * Maps an English blog post category to its Persian equivalent.
 *
 * @param {string} category - The English category name (e.g., "beauty", "diet").
 * @returns {string} The Persian translation of the category, or "متفرقه" if not matched.
 */
export function mapPostCategoryToPersian(category: string): string {
  const categoryMap: Record<string, string> = {
    disease: "بیماری ها",
    beauty: "پوست و زیبایی",
    mother: "مادر و کودک",
    oral: "دهان و دندان",
    diet: "رژیم و تغذیه",
    medicine: "اطلاعات دارویی",
  };

  return categoryMap[category.toLowerCase()] || "متفرقه";
}
