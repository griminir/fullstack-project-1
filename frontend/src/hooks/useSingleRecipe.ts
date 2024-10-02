import useData from './useData';

export interface SingleRecipe {
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
