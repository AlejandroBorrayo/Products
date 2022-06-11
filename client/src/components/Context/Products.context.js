import { useState, createContext, useEffect } from "react";
import axios from "axios"
const CtxProducts = createContext();

function ProductsContext(props) {
  const [product,setProduct] = useState(null)
  const [category,setCategory] = useState(null)
  const [price,setPrice] = useState(null)
  const [user, setUser] = useState()
  const [updateProduct, setUpdateProduct] = useState({})
  const [ShowMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState("")
  const [deleted, setDeleted] = useState("")
  const [open, setOpen] = useState(false);



  const CreateNewProduct=(e)=>{
    e.preventDefault()
    const Product = {
      product,
      category,
      price,
      Userid:user._id
    }
    axios.post(`${process.env.REACT_APP_SERVER_URL}/products`,Product)
    .then(res=>{
      setShowMessage(true)
      setMessage(res.data.message)
    })
    .catch(err=>{
      setMessage(err)})
  }

  const DeleteProduct = (id)=>{
    axios.delete(`${process.env.REACT_APP_SERVER_URL}/products/${id}`)
    .then(res=>{
      setDeleted(res.data.message)
      setOpen(true)
    })
    .catch(err=>console.log(err))
  }

  const UpdateProduct = (product)=>{
    axios.put(`${process.env.REACT_APP_SERVER_URL}/products/${product.id}`,product)
    .then(res=>{
      setMessage(res.data.message)
    })
    .catch(console.log())
  }

  const UpdateProfile = (profile)=>{
    axios.put(`${process.env.REACT_APP_SERVER_URL}/profile/${profile.id}`,profile)
    .then(res=>{
      setShowMessage(true)
      setMessage(res.data.message)
    })
    .catch(console.log())
  }



    

  return (
    <CtxProducts.Provider value={{setUser, setProduct, setCategory, 
    setPrice, CreateNewProduct, DeleteProduct, setUpdateProduct,UpdateProduct
    ,setShowMessage,ShowMessage,message,setMessage, deleted, setDeleted, open, setOpen, UpdateProfile}} >
        {props.children}
    </CtxProducts.Provider>
  );
}

const CosasParaExportar = {
    CtxProducts,
    ProductsContext
};

export default CosasParaExportar;
