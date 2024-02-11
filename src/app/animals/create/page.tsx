'use client';
import AnimalForm from 'app/components/animal/AnimalForm/AnimalForm';
import { createAnimal } from 'app/services/mongodb/animal/post';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function CreateAnimalPage() {
  const handleSubmit = async (data: AnimalsType) => {
    try {
      await createAnimal(data);
      toast.success('¡El animal ha sido creado exitosamente!', {
        position: 'top-right',
        autoClose: 3000,
      });

      setTimeout(() => {
        window.location.href = '/animals';
      }, 3000);
    } catch (error) {
      console.error('Error al crear el animal:', error);
      toast.error(
        'Hubo un error al crear el animal. Por favor, inténtalo de nuevo.'
      );
    }
  };

  return (
    <>
      <AnimalForm
        handleSubmit={handleSubmit}
        initialValues={{
          name: '',
          origin: '',
          image: '',
          diet: '',
          skills: '',
        }}
      />
      <ToastContainer />
    </>
  );
}
