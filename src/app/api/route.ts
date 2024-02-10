import { getAnimals } from "app/services/shopify/products"

export async function GET() {
    const animals = await getAnimals();
  
    return Response.json({ animals });
  }