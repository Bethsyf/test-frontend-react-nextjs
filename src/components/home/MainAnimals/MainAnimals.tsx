import { getAnimals } from 'app/services/mongodb/animals/get';
import s from './MainAnimals.module.scss';
import Image from 'next/image';

export const MainAnimals = async () => {
  const animals = await getAnimals();
  return (
    <section className={s.mainAnimals}>
      <h3>✨ ¡Nuestros Animales!</h3>
      <div className={s.grid}>
        {animals?.map((animal: any) => {
          return (
            <article key={animal._id}>
              <p>{animal.name}</p>
              <Image
                src={animal.image}
                alt={animal.name}
                fill
                loading="eager"
              />
            </article>
          );
        })}
      </div>
    </section>
  );
};
