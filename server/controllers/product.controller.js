const { findByIdAndRemove } = require("../models/Product.model.js")
const Product = require ("../models/Product.model.js")
const User = require("../models/User.model")

exports.NewProduct = (req,res)=>{
    const {category,product,price,Userid} = req.body
   Product.create({category,product,price,User:Userid})
   .then(product=>{
       User.findByIdAndUpdate(Userid,{$push:{products:product._id}})
       .then(respuesta=>{res.json({message:"Se agregó correctamente"})})
       .catch(err=>console.log(err))
   })
   .catch(err=>console.log(err))
}

exports.GetProductsById = async (req,res)=>{
    try{
        const products = await Product.find({User:req.params.id})
        res.json(products)
    }catch(err){
        console.log(err)
    }
}

exports.DeleteProduct = async (req,res)=>{
    try{
        await Product.findByIdAndRemove(req.params.id)
        res.json({message:"Producto eliminado correctamente"})
    }catch(err){
        console.log(err)
    }
}
exports.UpdateProduct = async (req,res)=>{
    const {id,product,category,price} = req.body
    const Price = Number(price)
    try{
        await Product.findByIdAndUpdate(id,{product,category,price:Price})
        res.json({message:"Actualizado correctamente"})
    }catch(err){
        console.log(err)
    }
}