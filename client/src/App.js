import './App.css';
import Header from './components/Header/Header';
import AllServices from './components/AllServices/AllServices';
import BookRequest from './components/BookRequest/BookRequest';
import FeaturedVendors from './components/FeaturedVendors/FeaturedVendors';
import Feedback from './components/Feedback/Feedback';
import Footer from './components/Footer/Footer';
import Search from './components/Search/Search';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './components/Main/Main';
import CustomerLogin from './components/UserLogin/CustomerLogin';
import TechnicianLogin from './components/TechnicianLogin/TechnicianLogin';

function App() {
  const router = createBrowserRouter([
    {
      path:'',
      element:<Main/>
    },
    {
      path:'/user-login',
      element:<CustomerLogin/>
    },
    {
      path:'/technician-login',
      element:<TechnicianLogin/>
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
