import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/ui/AppLayout";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import MovieDetails from "./pages/MovieDetails";
import Error from "./components/Error";
import { moviesLoader } from "./loaders/moviesLoader";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,

    children: [
      {
        path: "/",
        element: <Home />,
        loader: moviesLoader,
        errorElement: <Error />,
      },
      {
        path: "/movies/:id",
        element: <MovieDetails />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
