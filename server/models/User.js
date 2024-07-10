// Model That defines our user model

const { Schema, model } = require('mongoose');
const bcrypt = require('bcrypt');

// import schema from product
const productSchema = require('./Product')

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [/.+@.+\..+/, 'Please enter a valid email address.'],
    },
    shippingAddress: {
      type: String,
      required: true,
      unique: true,
    },

    productsForSale: [productSchema],
  },
  // set this to use virtual below
  {
    toJSON: {
      virtuals: true,
    },
  }
);

// Encrypt plain text password
userSchema.pre('save', async function (next) {
  if (this.isNew || this.isModified('password')) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

// Custom method, validates if the target password matches the encrypted version in the db
userSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

// Returns a field with the products this user has for sale
//  /// THIS NEEDS WORK ////
userSchema.virtual('productsForSale').get(function () {
  const productsForSale = {
    numOfListings : this.productsForSale.length,
    Listings : this.productsForSale,
  };
  return productsForSale
});

const User = model('User', userSchema);

module.exports = User;
