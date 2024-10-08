import 'primereact/resources/themes/lara-light-indigo/theme.css'; //theme
import 'primereact/resources/primereact.min.css'; //core css
import 'primeicons/primeicons.css'; //icons
import 'primeflex/primeflex.css'; // flex
import Header from './components/Header';
import LandingPageLayout from './layouts/LandingPageLayout';
import Footer from './components/Footer';
import About from './routes/About';
import Home from './routes/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HigherOrder from './pages/HigherOrder';
import SynthicEvent from './pages/SynthicEvent';
import ErrorPage from './pages/ErrorPage';
import Products from './routes/Products';
import Todos from './routes/Todos';
import { getTodo, todosLoader } from './loader/todosLoader';
import Todo from './components/Todo';

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPageLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        children: [
          { path: 'hoc', element: <HigherOrder /> },
          { path: 'synth', element: <SynthicEvent /> },
        ],
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'products',
        element: <Products />,
      },
      {
        path: 'todos',
        element: <Todos />,
        loader: todosLoader,
      },
      {
        path: 'todos/:todoId',
        element: <Todo />,
        loader: getTodo,
      },
      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
