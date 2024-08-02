import ItemList from "../ItemList" 
import { products } from "../../products"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {BeatLoader} from "react-spinners"


const ItemListConteiner = () => {
 const [items, setItems] = useState([])
 const [error, setError] = useState({});
 const { name } = useParams();

useEffect(() => {
  const getProducts = new Promise((resolve, reject) => {
    let x = true;
    let arrayFiltered = products.filter(
       (product) => product.category === name)
  if (x) {
    setTimeout(()=> {
       resolve(name ? arrayFiltered : products);
    }, 2000)
   
  } else {
    reject ({ message: "error", codigo: "484"});
  }
});


getProducts
  .then((res) => {
    setItems( res )
  })
  .catch((error) => {
    setError(error)
  });
} , [name]);
if( items.length === 0 ) {
  return (
    <div 
    style={{
      width: "100%",
      display: "flex",
      justifyContent: "center",
    }}
    >
      <BeatLoader  color="palevioletred" size={40} />
    </div>
  ); 
}

  return <ItemList  items={items}/>;
    
};

export default ItemListConteiner