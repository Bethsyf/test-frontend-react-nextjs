import Link from 'next/link';
import { AnimalCard } from '../AnimalCard/AnimalCard';
import s from './AnimalsWrapper.module.scss';

export const AnimalsWrapper = ({ animals }: AnimalsProps) => {
  return (
    <div className={s.containner}>
      <div className={s.newAnimal}>
        <Link href="/animals/create">Crear Animal</Link>
      </div>
      <div className={s.animalsWrapper}>
        {animals.map((animal: AnimalsType) => (
          <AnimalCard key={animal._id} animal={animal} />
        ))}
      </div>
    </div>
  );
};
