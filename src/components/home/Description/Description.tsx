'use client';

import s from './Description.module.scss';
import Image from 'next/image';
import animals from '/public/animals.jpg';

export const Description = () => {
  return (
    <section className={s.description}>
      <div className={s.imageContainer}>
        <Image src={animals} alt="animals-image" fill placeholder="blur" />
      </div>

      <div className={s.text}>
        <h2>
          Conoce y colecciona cada uno de los animales que habitan en nuestro
          planeta.
        </h2>
        <p>
          Diviertete aprendiendo un poco de cada animal mientras te sumerges en
          una experiencia única. Donde tambien podrás crear tus animales y
          publicarlos.
        </p>
      </div>
    </section>
  );
};
