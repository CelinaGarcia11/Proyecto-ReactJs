import { Button } from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
const Cart = () => {
  const { cart, clearCart, deleteProduct, getTotalPrice } = 
  useContext(CartContext);
  let total = getTotalPrice();

  const handleDelete = (id) => {
    
    Swal.fire({
      title: "¿Seguro quieres eliminar?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Si eliminar",
      denyButtonText: `No eliminar`
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        deleteProduct(id);
        Swal.fire("Eliminado", "", "success");
      } else if (result.isDenied) {
        Swal.fire("No se elimino", "", "info");
      }
    });
   

  };

  return (
    <div>
        {cart.map((elemento) => {
          return (
            <div 
            key={elemento.id}
            style={{ border: "2px solid black", width:"200px" }}>

              <h2>{elemento.title}</h2>
              <h2>{elemento.quantity}</h2>
              <h2>{elemento.price}</h2>
              <Button variant="contained" 
              onClick={() => handleDelete(elemento.id)}
              >
                Eliminar
                </Button>
            </div>
          );
        })}
        <h2>El total a pagar es {total}</h2>
        {
          cart.length > 0 && <Button onClick={clearCart}>Limpiar carrito</Button>
        }
          
        <Link to="/checkout">
          <Button variant="contained">Finalizar compra</Button>
        </Link>
    </div>
  );
};

export default Cart;