import { getAnimals } from 'app/services/mongodb/animals/get';
import s from './MainAnimals.module.scss';
import Image from 'next/image';

const MainAnimals = async () => {
  const fetchAnimals = async () => {
    try {
      const animals = await getAnimals();
      return animals;
    } catch (error: any) {
      console.error('Error al obtener animales:', error.message);
      return [];
    }
  };

  const renderAnimalCards = (animals: [AnimalsType]) => {
    return animals.map((animal) => (
      <article key={animal._id}>
        <p>{animal?.name}</p>
        <Image src={animal?.image} alt={animal?.name} fill loading="eager" />
      </article>
    ));
  };

  return (
    <section className={s.mainAnimals}>
      <h3>✨ ¡Nuestros Animales!</h3>
      <div className={s.grid}>{renderAnimalCards(await fetchAnimals())}</div>
    </section>
  );
};

export default MainAnimals;
