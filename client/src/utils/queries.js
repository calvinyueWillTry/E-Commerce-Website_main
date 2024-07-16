import { gql } from '@apollo/client';

export const QUERY_CURRENT =gql`
  {
    current {
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

export const QUERY_USERS =gql`
  {
    Users {
      
    }
  }
`;

export const QUERY_USER=gql`


`;

export const QUERY_USER_BY_USERNAME =gql`

`;

export const QUERY_PRODUCTS =gql`

`;

export const QUERY_PRODUCT =gql`

`;

export const QUERY_PRODUCT_BY_NAME =gql`

`;