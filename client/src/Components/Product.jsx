import React from "react";
import Carousel from "./Carousel"; // automatically goes to /index.jsx

function Products() {
    return (
        <div>
            <Carousel/>
            
            <img className="img_responsive" src="images/insta-item1.jpg" alt="#"> Products </img>
        </div>
    )
};
export default Products;