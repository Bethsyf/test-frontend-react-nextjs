import Image from 'next/image';
import s from './AnimalDetail.module.scss';
interface ListAnimalProps {
  animal: any;
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
          <p className={''}>{animal.origin}</p>
        </div>
        <div className={s.containerInto}>
          <p className={s.props}>Dieta:</p>
          <p className={''}>{animal.diet}</p>
        </div>
        <p className={s.props}>Hábilidades:</p>
        <ul>
          {animal.skills.map((skill: string, index: number) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>
      </section>
    </main>
  );
};

export default AnimalDetail;
