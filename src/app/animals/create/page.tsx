'use client';

import AnimalForm from 'app/components/animal/AnimalForm/AnimalForm';
import { createAnimal } from 'app/services/mongodb/animal';

export default function CreatePage() {
  const handleSubmit = (data: any) => {
    createAnimal(data);
    console.log(data);
  };

  return <AnimalForm handleSubmit={handleSubmit} />;
}
