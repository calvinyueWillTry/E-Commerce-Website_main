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
    productName: String!
    description: String!
    image: String
    price: Int!
    seller: String!
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
  users: [User!]!
  user(id:ID!): User!
  UserByUsername(username: String!): User!
  products: [Product!]!
  product(id: ID!): Product!
  productByName(productName: String!): Product!
  }

type Mutation {
  login(email: String!, password: String!): Auth
  createUser(username: String!, email: String!, password: String!, shippingAddress: String!): Auth
  updateUser(updatedUser:UpdateUser!):User
  deleteUser(delUser:DeleteUser!):User
  createProduct(newProduct:CreateProduct!):Product
  updateProduct(updatedProduct:UpdateProduct!):Product
  deleteProduct(delProduct:DeleteProduct!):Product
}
`;

module.exports = typeDefs;