'use client';
'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import s from './AnimalCard.module.scss';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { deleteAnimal } from 'app/services/mongodb/animal/delete';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

interface AnimalCardProps {
  animal: any;
}

export const AnimalCard = ({ animal }: AnimalCardProps) => {
  const handleDelete = async () => {
    try {
      await deleteAnimal(animal._id);
      toast.success('¡El animal ha sido eliminado exitosamente!');
      window.location.reload();
    } catch (error) {
      console.error('Error al eliminar el animal:', error);
      toast.error(
        'Hubo un error al eliminar el animal. Por favor, inténtalo de nuevo.'
      );
    }
  };

  const confirmDelete = () => {
    if (window.confirm('¿Estás seguro de que quieres eliminar este animal?')) {
      handleDelete();
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
        <Link href={`/animals/edit/${animal._id}`} className={s.link}>
          <FaEdit />
        </Link>
        <div onClick={confirmDelete} className={s.deleteButton}>
          <FaTrashAlt />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};
