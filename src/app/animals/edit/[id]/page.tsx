'use client';
import AnimalForm from 'app/components/animal/AnimalForm/AnimalForm';
import { getAnimalById } from 'app/services/mongodb/animal/get';
import { updateAnimal } from 'app/services/mongodb/animal/patch';
import { redirect, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function EditAnimal() {
  const { id }: { id: string } = useParams();
  const [animal, setAnimal] = useState({
    name: '',
    origin: '',
    image: '',
    diet: '',
    skills: '',
  });
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (data: AnimalsType) => {
    try {
      await updateAnimal(id, data);
      toast.success('¡El animal ha sido actualizado exitosamente!', {
        position: 'top-right',
        autoClose: 3000,
      });
      setTimeout(() => {
        window.location.href = '/animals';
      }, 3000);
    } catch (error) {
      console.error('Error al actualizar el animal:', error);
      toast.error(
        'Hubo un error al actualizar el animal. Por favor, inténtalo de nuevo.'
      );
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      const fetchedAnimal = await getAnimalById(id);
      if (fetchedAnimal.success) {
        setAnimal(fetchedAnimal.data);
        setLoading(false);
      } else {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Cargando...</p>;
  }

  const initialValues = {
    name: animal.name || '',
    origin: animal.origin || '',
    image: animal.image || '',
    diet: animal.diet || '',
    skills: animal.skills || '',
  };

  return (
    <>
      <AnimalForm
        isUpdating
        handleSubmit={handleSubmit}
        initialValues={initialValues}
      />
      <ToastContainer />
    </>
  );
}
