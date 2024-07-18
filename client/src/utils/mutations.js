import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
mutation login($username: String, $password: String) {
  login(username: $username, password: $password) {
    token
    user {
      _id
      username
    }
  }
}
`;

export const ADD_USER = gql`
  mutation createUser($username: String!, $email: String!, $password: String!, $shippingAddress: String!) {
    createUser(username: $username, email: $email, password: $password, shippingAddress: $shippingAddress) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userId: ID, $username: String, $email: String, $shippingAddress: String) {
    updateUser(userId: ID, username: $username, email: $email, shippingAddress: $shippingAddress) {
      user {
        _id
        username
      }
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($userId: ID){
    deleteUser(userId: $userId){
      user {
        _id
      }
    }
  }
`;

export const ADD_PRODUCT = gql`
mutation createProduct($productName: String!, $description: String!, $price: String!, $image: String) {
  createProduct(productName: $productName, description: $description, price: $price, image: $image) {
    image
    price
    description
    productName
  }
}
`;

export const UPDATE_PRODUCT = gql`
  mutation addProduct($productName: String, $description: String, $image: String, $price: Int, $seller: String) {
    addProduct(productName: $productName, description: $description, image: $image, price: $price, seller: $seller) {
      product {
        productName
        description
        image
        price
        seller
      }
    }
  }
`;

export const DELETE_PRODUCTS = gql`
  mutation deleteProduct($productId: ID){
    deleteProduct(productId: $productId){
      product {
        _id
      }
    }
  }
`;