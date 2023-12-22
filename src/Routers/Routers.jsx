import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Home from '../Pages/Home/Home';
import Dashboard from '../Pages/Dashboard/Dashboard';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import About from '../Pages/About/About';
import PrivateRoute from '../PrivateRoutes/PrivateRoutes';
import PageNotFound from '../Pages/PageNotFound/PageNotFound';

const router = createBrowserRouter([
   {
      path: "/",
      element: <App />,
      errorElement: <PageNotFound></PageNotFound>,
      children: [
         {
            path: "/",
            element: <Home></Home>
         },
         {
            path: "/about",
            element: <About></About>
         }
      ]
   },
   {
      path: "/dashboard",
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>
   },
   {
      path: "/login",
      element: <Login></Login>
   },
   {
      path: "/register",
      element: <Register></Register>
   }
 ]);

export default router;