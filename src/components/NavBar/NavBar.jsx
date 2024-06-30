import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css"
import { FaCartArrowDown } from "react-icons/fa";

export const Navbar = () => {
    return (
        <div className="navbarCointeiner">
            <img src="https://res.cloudinary.com/dgev4isnh/image/upload/v1719781143/logo_e_odd9bu.png" alt="Logo"
            style={{
                width:"100px",
                height:"100px",
                objectFit: "cover"
            }}
            />


            <ul>
                <li>Todas</li>
                <li>Abrigo</li>
                <li>Fiesta</li>
                <li>Clasica</li>
                <li>Calzado</li>
            </ul>

            <CartWidget />
            
        </div> 
    )     
}

export default Navbar