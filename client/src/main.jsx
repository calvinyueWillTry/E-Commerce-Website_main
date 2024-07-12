import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from './App';
import Home from './Pages/Homepage';
import Reviews from './Pages/Reviews';
import Shopping from './Pages/Shop';
import Questions from './Pages/Contact';
import Registration from './Pages/Signup';
import Users from './Pages/User';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />, 

    children: [
      {
        index: true,
        element:<Home/>
      },
      {
        path: "/reviews",
        element:<Reviews/>
      },
      {
        path: "/shop",
        element:<Shopping/>
      },
      {
        path: "/contact",
        element: <Questions/>
      },
      {
        path: "/signup",
        element: <Registration/>
      },
      {
        path: "/user",
        element: <Users/>
      }
    ]
    
  }]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
);
