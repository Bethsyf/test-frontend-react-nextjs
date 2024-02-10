import { AnimalCard } from '../AnimalCard/AnimalCard';
import s from './AnimalsWrapper.module.scss';

interface AnimalsWrapperProps {
  animals: any;
}

export const AnimalsWrapper = ({ animals }: AnimalsWrapperProps) => {
  return (
    <div className={s.animalsWrapper}>
      {animals.map((animal: any) => (
        <AnimalCard key={animal.id} animal={animal} />
      ))}
    </div>
  );
};
