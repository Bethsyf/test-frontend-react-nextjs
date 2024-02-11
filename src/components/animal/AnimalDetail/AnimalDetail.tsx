import Image from 'next/image';
import s from './AnimalDetail.module.scss';
interface ListAnimalProps {
  animal: AnimalsType;
}

const AnimalDetail = ({ animal }: ListAnimalProps) => {
  return (
    <main className={s.animalDetails}>
      <section className={s.images}>
        <Image
          loading="eager"
          src={animal?.image}
          width={600}
          height={400}
          quality={80}
          alt={animal?.name}
        />
      </section>
      <section className={s.info}>
        <h1 className={s.title}>{animal?.name}</h1>
        <div className={s.containerInto}>
          <p className={s.props}>Origen: </p>
          <p className={''}>{animal?.origin}</p>
        </div>
        <div className={s.containerInto}>
          <p className={s.props}>Dieta:</p>
          <p className={''}>{animal?.diet}</p>
        </div>

        <p className={s.subtitle}>Hábilidades y/o descripción:</p>
        <p className={''}>{animal?.skills}</p>
      </section>
    </main>
  );
};

export default AnimalDetail;
