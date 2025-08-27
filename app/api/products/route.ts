import { searchProducts } from "@/app/_lib/products";
import { NextResponse } from "next/server";
/**
 * Handles GET requests to search for products by name.
 *
 * Extracts the `term` query parameter from the request URL and returns
 * a JSON response containing matching products.
 *
 * @param request - The incoming HTTP request object.
 * @returns A JSON response with an array of matching products.
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const term = searchParams.get("term") || "";

  const products = await searchProducts(term);
  return NextResponse.json(products);
}
