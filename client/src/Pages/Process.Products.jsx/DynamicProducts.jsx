import React, { useEffect } from 'react';
import { useState } from "react";
import { Link } from "react-router-dom";
import {QUERY_CURRENT} from "../../utils/queries";
import { useQuery } from '@apollo/client';
//import AddProducts from './Index.DynPro';

function ProductItemization() {

    const { loading, error, data } = useQuery(QUERY_CURRENT);
//loading, error, and data variables are being destructured from the result of the useQuery hook
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    console.log(data);
    const{ 
        username,
        shippingAddress,
        productsForSale
    }=data.current;

    return (
        <div>
            <h1>Welcome, {username}</h1>
            <p>Your shipping address: {shippingAddress}</p>
            <h2>Products for Sale:</h2>
            <ul>
                {productsForSale.map(product => (
                    <li key={product.productName}>
                        <img src={product.image} alt={product.productName} />
                        <p>Name: {product.productName}</p>
                        <p> Description: {product.description}</p>
                        <p>Price: {product.price}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};
export default ProductItemization;
