import { useMutation } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Ingredients } from './UseIngeredients';

const apiClient = new APIClient<Ingredients>('/recipes');

const useCreateIngredient = (id: number, ingredient: Ingredients) =>
  useMutation({});

export default useCreateIngredient;
