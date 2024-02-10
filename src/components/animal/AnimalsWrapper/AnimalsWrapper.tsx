import Link from 'next/link';
import { AnimalCard } from '../AnimalCard/AnimalCard';
import s from './AnimalsWrapper.module.scss';

interface AnimalsWrapperProps {
  animals: any;
}

export const AnimalsWrapper = ({ animals }: AnimalsWrapperProps) => {
  return (
    <div className={s.containner}>
      <div className={s.newAnimal}>
        <Link href="/animals/create">Crear Animal</Link>
      </div>
      <div className={s.animalsWrapper}>
        {animals.map((animal: any) => (
          <AnimalCard key={animal.id} animal={animal} />
        ))}
      </div>
    </div>
  );
};
