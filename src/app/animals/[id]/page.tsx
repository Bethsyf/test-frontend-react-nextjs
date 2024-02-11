'use client';
import React, { useEffect, useState } from 'react';
import AnimalDetail from 'app/components/animal/AnimalDetail/AnimalDetail';
import { redirect, useParams } from 'next/navigation';
import { getAnimalById } from 'app/services/mongodb/animal/get';

export default function AnimalPage() {
  const { id } = useParams();
  const [animal, setAnimal] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedAnimal = await getAnimalById(id);
      if (fetchedAnimal.success) {
        setAnimal(fetchedAnimal.data);
      } else {
      }
    };

    fetchData();
  }, [id]);

  if (!animal) {
    redirect('/');
  }

  const animals = animal;

  return <AnimalDetail animal={animals} />;
}
