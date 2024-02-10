import s from './MainAnimals.module.scss';

export const MainAnimals = async () => {
  return (
    <section className={s.mainAnimals}>
      <h3>✨ ¡Nuestros Animales!</h3>
      <div className={s.grid}>aqui van los animales</div>
    </section>
  );
};
