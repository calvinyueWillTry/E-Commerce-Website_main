import React from "react";
import firstItem from "../public/images/insta-item1.jpg"
import Carousel from "./Carousel"; // automatically goes to /index.jsx

function Products() {
    return (
        <div>
            <Carousel/>
            
            <img className="img_responsive" src={firstItem} alt="item" />
        </div>
    )
};
export default Products;
//exported to checkout and shop