const express = require("express");


const logger = require("morgan");


const cookieParser = require("cookie-parser");

const cors = require("cors");

module.exports = (app) => {

  app.set("trust proxy", 1);


  app.use(cors())
  
  const whitelist = ["localhost4000"]
  const corsOptions = {
      origin:(origin,callback)=>{
          const existe = whitelist.some(dominio => dominio.origin);
          if(existe){
              callback(null,true)
          }else{
              callback(new Error("No permitido por CORS"))
          }
      }
  }

  app.use(logger("dev"));

  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
};
