import { AnimalsWrapper } from 'app/components/animal/AnimalsWrapper/AnimalsWrapper';
import { getAnimals } from 'app/services/mongodb/animals/get';

export default async function AnimalsPage() {
  const animals = await getAnimals();
  return <AnimalsWrapper animals={animals} />;
}
