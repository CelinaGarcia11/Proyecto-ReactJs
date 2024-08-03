import { useState } from "react"

const Checkout = () => {
  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });

  const envioDeFormulario = (event) => {
    event.preventDefault();
    console.log(user);
  };

  const capturarData = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  return (
    <div>
        <h1>Aca va el formulario</h1>

        <form onSubmit={envioDeFormulario}>
          <input 
          type="text"
          placeholder="Ingresa tu nombre"
          onChange={capturarData}
          name="nombre"
        />
        <input
         type="text"
         placeholder="Ingresa tu email"
         name="email"
         onChange={capturarData}
        />
        <input
         type="text"
         placeholder="Ingresa tu telefono"
         name="telefono"
         onChange={capturarData}
        />

        <button>enviar</button>
      </form>

      
    </div>
  );
};

export default Checkout;