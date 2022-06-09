const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
    },
    password: String,
    address:String,
    country:String,
    city:String,
    number:String,
    email:String,
    avatar:{
      type:String,
      default:"https://res.cloudinary.com/ddoltb8nf/image/upload/v1653073923/Avatar/avatar_hawvkl.png"
    },
    products:[{ type: Schema.Types.ObjectId, ref: "Product" }]
  },
  {
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
