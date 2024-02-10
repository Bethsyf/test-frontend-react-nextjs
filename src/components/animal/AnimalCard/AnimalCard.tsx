'use client';
import Image from 'next/image';
import Link from 'next/link';
import s from './AnimalCard.module.scss';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { deleteAnimal } from 'app/services/mongodb/animals'; // Importa la función para eliminar el animal

interface AnimalCardProps {
  animal: any;
}

export const AnimalCard = ({ animal }: AnimalCardProps) => {
  const handleDelete = async () => {
    try {
      // Llama a la función deleteAnimal para eliminar el animal
      await deleteAnimal(animal._id);
      // Realiza alguna acción después de eliminar el animal, como actualizar la lista de animales
    } catch (error) {
      console.error('Error al eliminar el animal:', error);
    }
  };

  return (
    <div className={s.containner}>
      <Link href={`/animals/${animal._id}`} className={s.link}>
        <article className={s.animalCard}>
          <Image
            src={animal.image}
            alt={animal.name}
            quality={80}
            height={230}
            width={350}
            loading="eager"
          />
        </article>
      </Link>
      <div className={s.info}>
        <Link href={`/animals/${animal._id}`} className={s.link}>
          <h3>{animal.name}</h3>
        </Link>
        <Link href={'/animals/edit'} className={s.link}>
          <FaEdit />
        </Link>
        <div onClick={handleDelete} className={s.deleteButton}>
          <FaTrashAlt />
        </div>
      </div>
    </div>
  );
};
