const typeDefs = `
  type User {
    _id: ID!
    username: String!
    email: String!
    password: String!
    shippingAddress: String!
    productsForSale: [Product]
  }

  input CreateUser {
    username: String!
    email: String!
    password: String!
    shippingAddress: String!
  }
  
  input UpdateUser {
    _id: ID!
    username: String!
    email: String!
    shippingAddress: String!
  }

  input DeleteUser {
    _id: ID!
  }

  type Product {
    _id: ID!
    productName: String!
    description: String!
    image: String
    price: Int!
    seller: String!
    user: String
  }

  input CreateProduct {
    productName: String!
    description: String!
    image: String
    price: Int!
    seller: String!
  }

  input UpdateProduct {
    _id: ID!
    productName: String!
    description: String!
    image: String
    price: Int!
  }

  input DeleteProduct {
    _id: ID!
  }

  type Auth {
    token: ID!
    user: User
  }  

type Query {
  current: User
  users: [User]!
  user(id:ID): User
  UserByUsername(username: String): User!
  products: [Product]
  product(_id: ID!): Product
  productByName(productName: String): Product
  }

type Mutation {
  login(username: String, password: String): Auth
  createUser(username: String!, email: String!, password: String!, shippingAddress: String!): Auth
  updateUser(_id: ID!, email: String, shippingAddress: String): User
  deleteUser(delUser:DeleteUser!):User
  createProduct(productName: String!, description: String!, image: String, price: Int!):Product
  updateProduct(_id: ID!, productName: String, description: String, image: String, price: Int):Product
  deleteProduct(_id: ID!): Product
}
`;

module.exports = typeDefs;