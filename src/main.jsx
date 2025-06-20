import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import Login from './pages/login.jsx';
import Cadastro from './pages/cadastro.jsx';
import QuemSomos from './pages/QuemSomos.jsx';
import ComoDoar from './pages/ComoDoar.jsx';
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Registrar from './Pages/registrar.jsx';
import Tabela from './Pages/tabela.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/cadastro",
    element: <Cadastro />,
  },
  {
    path: "/como-doar",
    element: <ComoDoar />,
  },
  {
    path: "/registrar-doacao",
    element: <Registrar />,
  },
  {
    path: "/tabela",
    element: <Tabela />,
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    < RouterProvider router ={router} />
  </StrictMode>,
);
