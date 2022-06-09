const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the user model to whatever makes sense in this case
const userSchema = new Schema(
  {
    username: {
      type: String,
      // unique: true -> Ideally, should be unique, but its up to you
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
    // this second object adds extra properties: `createdAt` and `updatedAt`
    timestamps: true,
  }
);

const User = model("User", userSchema);

module.exports = User;
