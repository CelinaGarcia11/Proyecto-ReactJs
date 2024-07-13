import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";

const Layout = () => {
  return <>
   <Navbar />
   <div style={{ minHeight: "100vh"}}>
    <Outlet />
   </div>
   
   <Footer />
  </> 
};

export default Layout;