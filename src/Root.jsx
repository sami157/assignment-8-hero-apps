
import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useNavigation } from "react-router-dom";
import { Outlet } from 'react-router'
import Spinner from './components/Spinner';
import About from "./pages/About.jsx";

function Root() {
  const navigation = useNavigation();

  return (
    <div className='bg-[#F5F5F5] min-h-[1000px]'>
      <Navbar></Navbar>
     
      <main>
       {navigation.state === "loading" ? <Spinner /> : <Outlet />}
       </main>
      <Footer></Footer>
    </div>
  )
}

export default Root