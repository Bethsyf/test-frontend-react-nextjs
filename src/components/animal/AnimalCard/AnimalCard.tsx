import Image from 'next/image';
import Link from 'next/link';
import s from './AnimalCard.module.scss';

interface AnimalCardProps {
  animal: any;
}

export const AnimalCard = ({ animal }: AnimalCardProps) => {
  return (
    <Link href={`/animals/${animal.name}`} className={s.link}>
      <article className={s.animalCard}>
        <Image
          src={animal.image}
          alt={animal.name}
          quality={80}
          height={230}
          width={350}
          loading="eager"
        />
        <div className={s.info}>
          <h3>{animal.name}</h3>
        </div>
      </article>
    </Link>
  );
};
