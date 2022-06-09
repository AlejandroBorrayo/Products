const { Schema, model } = require("mongoose");

const productSchema = new Schema(
  {
    product: String,
    category: String,
    price:Number,
    User: { type: Schema.Types.ObjectId, ref: "User" }
  },
  {
    timestamps: true,
  }
);

const Product = model("Product", productSchema);

module.exports = Product;
