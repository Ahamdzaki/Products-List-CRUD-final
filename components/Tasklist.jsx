
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { colors } from '@mui/material';
export default function Tasklist({products,setProducts,setValue,setUpdateID}) {

  function handleEdit(id){
    const updateProduct= (products.find(product => product.id ===id));
    setValue(updateProduct.name);
    setUpdateID(updateProduct.id);

  }

  function hanndleDelete(id){
    setProducts(products.filter(product => product.id !== id));
  }
  return (
    <div>
        <ul>
            {products.map(product => (
              
                <li key={product.id}>
                  <div className="name">
                      {product.name}
                  </div>
                  <div className="time">
                      {product.dateAndtime}
                  </div>

                  <div className='btn'>
                    <DeleteIcon className="btnDelete" sx={{ fontSize: 30 }} style={{color:"red"}} onClick={()=> hanndleDelete (product.id)}/>
                    <EditNoteIcon sx ={{fontSize:30}} style={{color:"blue"}} onClick={()=> handleEdit (product.id)} />
                    
                  </div>
                </li>
            ))}
        </ul>
    </div>
  )
}
