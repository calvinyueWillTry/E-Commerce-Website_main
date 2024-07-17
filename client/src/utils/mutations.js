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
  mutation addUser($username: String, $email: String, $password: String, $shippingAdress: String) {
    addUser(username: $username, email: $email, password: $password, shippingAdress: $shippingAdress) {
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
  mutation addProduct($productName: String, $description: String, $image: String, $price: Int, $seller: String) {
    addProduct(productname: $productname, description: $decription, image: $image, price: $price, seller: $seller) {
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

export const UPDATE_PRODUCT = gql`
  mutation addProduct($productName: String, $description: String, $image: String, $price: Int, $seller: String) {
    addProduct(productname: $productname, description: $decription, image: $image, price: $price, seller: $seller) {
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