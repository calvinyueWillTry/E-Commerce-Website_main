const { Schema, model } = require('mongoose');

const noImage = require('client\src\assets\No_Image_available.jpg');
const userSchema = require('./User');

const productSchema = new Schema(
  {
    productname: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      default: noImage,
    },
    price: {
      type: Decimal128,
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

const Product = model('Product', productSchema);

module.exports = Product;