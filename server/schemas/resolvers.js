const  User  = require("../models/User");
const Product = require("../models/Product");
const { signToken, AuthenticationError } = require("../utils/auth");
// const { default: context } = require("react-bootstrap/esm/AccordionContext");

const resolvers = {
  Query: {
    current: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
  
  
    product: async (parent, { _id }) => {
      return await Product.findById(_id)
      }
    },

  Mutation: {
    login: async (parent, { username, password }) => {
        const user = await User.findOne({ username });
        if (!user) {
          throw AuthenticationError;
        }
        const correctPass = await user.isCorrectPassword(password);
        if (!correctPass) {
          throw AuthenticationError;
        }
  
        const token = signToken(user);
        return { token, user };
      },
    createUser: async (parent,{ username, email, password, shippingAddress }) => {
      const user = await User.create({
        username,
        email,
        password,
        shippingAddress,
      });
      const token = signToken(user);

      return { token, user };
    },
    updateUser: async (parent, {email, shippingAddress}, context) => {
        const user = await User.findOneAndUpdate(
            {_id: context.user._id},
            {$set: {email: email, shippingAddress, shippingAddress}},
            {new: true}
        );
        return user
    },
    deleteUser: async (parent, context) => {
        if (context.user) {
            return User.findOneAndDelete({ _id: context.user._id})
        }
    },
    createProduct: async (parent, {productName, description, image, price}, context) => {
            const username = context.user.username;
            const product = await Product.create({ 
            productName,
            description,
            image,
            price,
            username
        });
        if (context.user) {
            const sell = await User.findOneAndUpdate(
                { _id: context.user._id},
                {$push: {productsForSale :  product._id}},
                { new: true}
            );
            return {sell}
        };
        return { product }
    },
    updateProduct: async (parent, {productName, description, image, price}) => {
        const productUpdate = await Product.findOneAndUpdate(
            {_id: product._id},
            {$set: {productName: productName, 
                    description:description,
                    image: image,
                    price: price}},
            {new: true}
        );
        return productUpdate
    },
    deleteProduct: async (parent, {_id}, context) => {
        if (context.user) {
            const product = await Product.findOneAndDelete(_id);
            const user = await User.findOneAndUpdate(
              { _id: context.user._id },
              { $pull: { "productsForSale": _id}},
              {new: true}
            )
            return (user)
          }
        }
    }
};

module.exports = resolvers;
