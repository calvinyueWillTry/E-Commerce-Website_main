import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Home from './Pages/Homepage';
import Reviews from './Pages/Reviews';
import Shopping from './Pages/Shop';
import Contact from './Pages/Contact';
import Registration from './Pages/Signup';
import 'bootstrap/dist/css/bootstrap.min.css';


import Login from './Pages/Login';
import Account from './Pages/Account';

// import 'bootstrap/dist/css/bootstrap.css';

// Put any other imports below so that CSS from your components takes precedence over default styles.
//outlet allows the children below to replace the path at line 15

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 
    error: <error />,
    children: [
      { 
        index: true,
        element:<Home />
      },
      {
        path: "/reviews",
        element:<Reviews />
      },
      {
        path: "/shop",
        element:<Shopping />
      },
      {
        path: "/contact",
        element: <Contact />
      },
      {
        path: "/signup",
        element: <Registration />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/account",
        element: <Account />
      }
    ]
    
  }]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
