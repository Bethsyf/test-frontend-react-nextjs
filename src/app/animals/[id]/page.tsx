import AnimalDetail from 'app/components/animal/AnimalDetail/AnimalDetail';
import { getAnimals } from 'app/services/mongodb/animals';
import { redirect } from 'next/navigation';

interface AnimalsPageProps {
  searchParams: {
    id: string;
  };
}
export default async function AnimalPage({ searchParams }: AnimalsPageProps) {
  const id = searchParams.id;
  console.log(searchParams);
  const animals = await getAnimals(id);
  const animal = animals[0];
  if (!id) {
    // redirect('/');
  }
  return <AnimalDetail animal={animal} />;
}
