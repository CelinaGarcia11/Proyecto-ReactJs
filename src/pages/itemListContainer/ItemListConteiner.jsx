import ItemList from "../ItemList" 
import { products } from "../../products"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    resolve(name ? arrayFiltered : products);
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

  return <ItemList  items={items}/>;
    
};

export default ItemListConteiner