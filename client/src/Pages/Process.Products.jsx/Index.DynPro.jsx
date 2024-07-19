import { Link } from "react-router-dom";
import {QUERY_CURRENT} from "../../utils/queries";
import { useQuery } from '@apollo/client';
import { useState } from "react";


function AddProducts(props) {

    const [product, setProduct]=useState("");
    const [newProduct, setNewProduct]=useState("");
    const{  //from QUERY_CURRENT
        username,
        shippingAddress,
        productsForSale
    }=data.current;
    const {productArray} = product;

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
    )
};
export default AddProducts;