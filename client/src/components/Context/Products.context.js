import { useState, createContext, useEffect } from "react";
import axios from "axios"
const CtxProducts = createContext();

function ProductsContext(props) {
  const [product,setProduct] = useState(null)
  const [category,setCategory] = useState(null)
  const [price,setPrice] = useState(null)
  const [user, setUser] = useState()
  const [updateProduct, setUpdateProduct] = useState({})
  const [products, setProducts] = useState([])
  const [ShowMessage, setShowMessage] = useState(false)
  const [message, setMessage] = useState("")


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
    .then(res=>console.log(res))
    .catch(err=>console.log(err))
  }

  const UpdateProduct = (product)=>{
    axios.put(`${process.env.REACT_APP_SERVER_URL}/products/${product.id}`,product)
    .then(res=>{
      setShowMessage(true)
      setMessage(res.data.message)
    })
    .catch(console.log())
  }



    

  return (
    <CtxProducts.Provider value={{setUser, setProduct, setCategory, 
    setPrice, CreateNewProduct, DeleteProduct, setUpdateProduct,UpdateProduct,
     products,setShowMessage,ShowMessage,message,setProducts,setMessage}} >
        {props.children}
    </CtxProducts.Provider>
  );
}

const CosasParaExportar = {
    CtxProducts,
    ProductsContext
};

export default CosasParaExportar;
