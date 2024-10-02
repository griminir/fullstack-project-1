import useData from './useData';

export interface SingleRecipe {
  id: number;
  title: string;
  description: string;
  picture: string;
  ingridientId: number;
  quantity: number;
  unit: string;
  name: string;
}

const useSingleRecipe = (id: number) => {
  const { data, error, isLoading } = useData<SingleRecipe>(`/recipes/${id}`);

  return { data, error, isLoading };
};

export default useSingleRecipe;
