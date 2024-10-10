import { createBrowserRouter } from 'react-router-dom';
import HomePage from './components/HomePage';
import Layout from './pages/Layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [{ index: true, element: <HomePage /> }],
  },
]);

export default router;
