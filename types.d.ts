interface ErrorPageProps {
  error: Error;
  reset: () => void;
}

type AnimalsType = {
  _id?: string;
  name: string;
  origin: string;
  image:string;
  diet: string;
  skills: string;
};

interface AnimalsProps {
  animals: [];
}