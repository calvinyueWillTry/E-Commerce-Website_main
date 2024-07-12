const { User } = require("../models/User");
const {Product} = require("../models/Product")
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    current: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id });
      }
      throw AuthenticationError;
    },
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
    updateUser: async (parent, {email, shippingAddress}) => {
        // write logic
    },
    deleteUser: async (parent, {_id}) => {
        // write logic
    },
    createProduct: async (parent, {productName, description, image, price, context}) => {
        const product = await Product.create({ 
            productName,
            description,
            image,
            price
        });
        if (context.user) {
            const seller = await User.findOneAndUpdate(
                { _id: context.user._id},
                {$addToSet: {productsForSale : product}},
                { new: true}
            );
            return {seller}
        };
        return { product }
    },
    updateProduct: async (parent, {productName, description, image, price}) => {
        //write logic
    },
    deleteProduct: async (parent, {_id}) => {
        //write logic
    }
},
};

module.exports = resolvers;
