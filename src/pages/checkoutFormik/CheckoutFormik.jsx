import { Password } from '@mui/icons-material';
import { Button,TextField } from '@mui/material';
import { useFormik } from 'formik';
import * as Yup from "yup"



 

const CheckoutFormik = () => {

    const { handleSubmit, handleChange, errors } = useFormik({
        initialValues: {nombre:"", email:"", telefono:"", codigoPostal:"", provincia:"", ciudad:"", direccion:"",},
        onSubmit: ( data ) => {
            console.log(data);
        },
        validationSchema: Yup.object({
            nombre: Yup.string().required("este campo es requerido").min(5, "ingrese al menos 5 caracteres"),
            email: Yup.string().email("el email debe contener @").required("este campo es requerido"),
            telefono: Yup.string().required("este campo es requerido").min(12).matches(/^(0123456789)/, "debe contener solo numeros"),
            codigoPostal: Yup.string().required("este campo es requerido").matches(/^(0123456789)/, "debe contener solo numeros"),
            provincia: Yup.string().required("este campo es requerido").min(5, "ingrese al menos 5 caracteres"),
            ciudad: Yup.string().required("este campo es requerido").min(5, "ingrese al menos 5 caracteres"),
            direccion: Yup.string().required("este campo es requerido").min(5, "ingrese al menos 5 caracteres"),
        }),
        validateOnChange: false,

       
    });

    console.log(errors);
    console.log(errors.nombre);


    

  return (
     <form 
     onSubmit={handleSubmit}
     style={{
        margin: "50px",
        display: "flex",
        flexDirection: "column",
        width: "50%",
        gap: "20px",
     }}
     >
    <TextField 
    variant="outlined" 
    type="text" 
    label="nombre" 
    name="nombre"
    onChange={handleChange}
    error={ errors.nombre ? true : false}
    helperText={errors.nombre}
    />
    <TextField 
    variant="outlined" 
    type="text" 
    label="email" 
    name="email"
    onChange={handleChange}
    error={ errors.email ? true : false}
    helperText={errors.email}
    />
    <TextField 
    variant="outlined"
    type="text" 
    label="telefono" 
    name="telefono"
    onChange={handleChange}
    error={ errors.telefono ? true : false}
    helperText={errors.telefono}
/>
    <TextField 
    variant="outlined" 
    type="text" 
    label="codigo Postal" 
    name="codigoPostal"
    onChange={handleChange}
    error={ errors.codigoPostal ? true : false}
    helperText={errors.codigoPostal}
 />
    <TextField 
    variant="outlined" 
    type="text" 
    label="provincia" 
    name="provincia"
    onChange={handleChange}
    error={ errors.provincia ? true : false}
    helperText={errors.provincia}
 />
    <TextField 
    variant="outlined" 
    type="text" 
    label="ciudad" 
    name="ciudad"
    onChange={handleChange}
    error={ errors.ciudad ? true : false}
    helperText={errors.ciudad}
 />
    <TextField 
    variant="outlined" 
    type="text" 
    label="direccion" 
    name="direccion"
    onChange={handleChange}
    error={ errors.direccion ? true : false}
    helperText={errors.direccion}
 />



    <Button type="submit" variant="contained">Enviar</Button>
  </form>
  );
};

export default CheckoutFormik