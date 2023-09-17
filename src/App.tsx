

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './pages/Root/Root';
import Random from './pages/Random/Random';
import Home from './pages/Home/Home';
import Choose from './pages/Choose/Choose';
import RecipeInfo from './components/RecipeInfo/RecipeInfo';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { path: 'randomRecipe', element: <Random/> },
      { index: true, element: <Home /> },
      { path: 'restaurant/:MealId', element: <RecipeInfo /> }, 
      { path: 'choose', element: <Choose /> },
    ],
  },

]);
function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
