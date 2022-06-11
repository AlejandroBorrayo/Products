const User = require("../models/User.model")


exports.UpdateProfile = async (req,res)=>{
    const {id,address,city,country,email,number} = req.body
    console.log(req.body)
    try{
        await User.findByIdAndUpdate(id,{address,city,country,email,number})
        res.json({message:"Actualizado correctamente"})
    }catch(err){
        console.log(err)
    }
}


exports.GetProfile = async (req,res)=>{
    console.log(req.params.id)
    try{
        const profile =  await User.findById(req.params.id)
        res.json(profile)
    }catch(err){
        console.log(err)
    }
}
