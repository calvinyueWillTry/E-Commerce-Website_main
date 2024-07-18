import { gql } from '@apollo/client';

export const QUERY_CURRENT = gql`
  query current {
    current {
    _id
    username
    email
    shippingAddress
    productsForSale {
      productName
      description
      image
      price
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($userID: ID) {
    user(userId: $userId) {
      _id
    username
    shippingAddress
    productsForSale {
      productName
      description
      image
      price
      }
    }
  }
`;

export const QUERY_USER_BY_USERNAME = gql`
  query user($username: String) {
    user(username: $username) {
      _id
      username
      shippingAddress
      productsForSale {
        productName
        description
        image
        price
      }
    }
  }
`;

export const QUERY_PRODUCTS = gql`
  query allProducts {
    products {
      productName
      description
      image
      price
    }
  }
`;

export const QUERY_PRODUCT = gql`
  query getProductById($productId: ID) {
    product(productId: $profileId) {
      productName
      description
      image
      price
      seller
    }
  }
`;

export const QUERY_PRODUCT_BY_NAME = gql`
  query getProductByName($productId: ID) {
    product(productId: $profileId) {
      productName
      description
      image
      price
      seller
    }
  }
`;