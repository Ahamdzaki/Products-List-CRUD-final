
import React, { useEffect, useState } from 'react'
import Tasklist from './Tasklist'
import Form from "./Form"
export default function Tasks() {
    const [products , setProducts] = useState(JSON.parse(localStorage.getItem("products"))||[]);
    
    useEffect(() => {
      localStorage.setItem("products",JSON.stringify(products))
    },[products])

 
    
   

    const [nextId,setNextID] = useState(1);

    const [value,setValue] = useState("");

    const [updateId,setUpdateID] = useState(null);


    function handleSubmit(event){
        event.preventDefault();
        if (updateId !== null){
          if(value.trim() !== "") {
            const date = new Date();
            const productsToUpdate = products.map(product => product.id == updateId ? {id:updateId,name:value.charAt(0).toUpperCase() + value.slice(1),dateAndtime:date.toLocaleTimeString()+" "+date.toLocaleDateString()}: product);
            setProducts(productsToUpdate);
            setValue("");
            setUpdateID(null);
          }
        }
        else {
          
          if (value.trim() !==""){
            const date = new Date();
            const productInformation = {
              id:nextId,
              name:value.charAt(0).toUpperCase() + value.slice(1),
              dateAndtime: date.toLocaleTimeString() +" "+date.toLocaleDateString()
          }
          
          setProducts([...products,productInformation]);
          setNextID(nextId + 1);
          setValue("");  
          }
          else {
            alert( "fill the input");
          }
          }
         
         
    }
  return (
    <div className="container">
      <div className="form-container">
        <Form  handleSubmit={handleSubmit} value = {value} setValue = {setValue} updateId={updateId}/>
      </div>
        <Tasklist products={products} setProducts={setProducts} setValue = {setValue} setUpdateID={setUpdateID}/>
        
    </div>
  )
}
