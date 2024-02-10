import { getAnimals } from "app/services/mongodb/animals";

export async function GET() {
    const animals = await getAnimals();
  
    return Response.json({ animals });
  }