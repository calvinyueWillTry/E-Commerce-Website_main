const  User  = require("../models/User");
const Product = require("../models/Product");
const { signToken, AuthenticationError } = require("../utils/auth");

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
    updateUser: async (parent, {email, shippingAddress,}) => {
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
    createProduct: async (parent, {productName, description, image, price, context, seller, userId}) => {
        const product = await Product.create({
            productName,
            description,
            image,
            price,
            seller,
            userId,
        });
        if (1===1) {
            const seller = await User.findOneAndUpdate(
                { _id: userId},
                {$push: { productsForSale : product._id } },
                { new: true }
            );
            return {seller}
        };
        return { product }
    },
    updateProduct: async (parent, {productName, description, image, price}) => {
        const product = await Product.findOneAndUpdate(
            {_id: context.product._id},
            {$set: {productName: productName, 
                    description:description,
                    image: image,
                    price: price}},
            {new: true}
        );
        return product
    },
    deleteProduct: async (parent, { _id } ) => {
        if (1===1) {
            const product = await Product.findOneAndDelete(_id);
            const user = await User.findOneAndUpdate(
              { productsForSale: _id },
              { $pull: { productsForSale: [ _id ] } },
              {new: true}
            )
            return (user)
          }
        }
    }
};

module.exports = resolvers;
