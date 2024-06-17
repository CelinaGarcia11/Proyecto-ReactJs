import CartWidget from "../cartWidget/CartWidget";
import "./navbar.css"
import { FaCartArrowDown } from "react-icons/fa";

export const Navbar = () => {
    return (
        <div className="navbarCointeiner">
            <h2>Logo</h2>


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