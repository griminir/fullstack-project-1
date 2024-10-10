import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './pages/Layout';
import RecipeDetailsPage from './pages/RecipeDetailsPage';
import NewRecipePage from './pages/NewRecipePage';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      { path: 'recipes/:id', element: <RecipeDetailsPage /> },
      { path: 'new-recipe', element: <NewRecipePage /> },
    ],
  },
]);

export default router;
