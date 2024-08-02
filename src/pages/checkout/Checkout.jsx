import { useState } from "react"

const Checkout = () => {
  const [user, setUser] = useState({ nombre: "", email: "", telefono: "" });
  
  const [obj, setObj] = useState("")

  const envioDeFormulario = (event) => {
    event.preventDefault();
    console.log(user);
  };

  const capturarData = (event) => {
    let { name, value} = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSelect = (e) => {
    console.log(e.target.value);
  };

  const handleRadio = (e) => {
    console.log(e.target.value);
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

        <select onChange={handleSelect} >
          <option label="uno" value={"one"} />
          <option label="dos" value={"two"} />
          <option label="tres" value={15} />
        </select>

        <label>casa</label>
        <input type="radio" name="entidad" onChange={handleRadio} value="casa" />
        <label>avion</label>
        <input type="radio" name="entidad" onChange={handleRadio} value="avion" />

        <button>enviar</button>
        <button type="button">cancelar</button>
      </form>

      
    </div>
  );
};

export default Checkout;