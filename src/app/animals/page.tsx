import { AnimalsWrapper } from 'app/components/animal/AnimalsWrapper/AnimalsWrapper';
import { getAnimals } from 'app/services/mongodb/animals/get';

export default async function AnimalsPage() {
  const fetchAnimals = async () => {
    try {
      const animals = await getAnimals();
      return animals;
    } catch (error: any) {
      console.error('Error al obtener animales:', error.message);
      return [];
    }
  };

  return <AnimalsWrapper animals={await fetchAnimals()} />;
}
