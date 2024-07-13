import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css"
import { Link } from "react-router-dom"
export const Navbar = () => {
    return (
        <div>
            <> 
            <div className="navbarCointeiner">
               <Link to="/">
               <img style={{width:"100px"}} src="https://res.cloudinary.com/dgev4isnh/image/upload/v1719781143/logo_e_odd9bu.png" alt="Logo" />
               </Link>

             <ul ClassName="categories">
                <Link to="/">Todas</Link>
                <Link to="/category/abrigo">Abrigo</Link>
                <Link to="/category/fiesta">Fiesta</Link>
                <Link to="/category/clasica">Clasica</Link>
                <Link to="/category/calzado">Calzado</Link>
                </ul>

            <CartWidget />
            
        </div> 
       </>
        </div>  
    );    
};

export default Navbar