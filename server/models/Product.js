const { Schema, Model } = require('mongoose');

// const noImage = require('client\src\assets\No_Image_available.jpg');
const userSchema = require('./User');

const productSchema = new Schema(
  {
    productName: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: "",
    },
    price: {
      type: Number,
      required: true,
    },
    seller: [userSchema],
  },
  {
    toJSON: {
      virtuals: true,
    },
  }
);

productSchema.virtual('seller').get(function () {
  return this.seller.username;
});

const Product = Model('Product', productSchema);

module.exports = Product;