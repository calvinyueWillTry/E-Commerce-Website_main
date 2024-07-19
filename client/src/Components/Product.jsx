import React from "react";
import CarouselTheProducts from "./Carousel/indexProduct"; // automatically goes to /index.jsx
import "../public/CSS/style.css"
import WatchesRow from "./Carousel/indexProRow";

function Products() {
    return (
    <div className="carousel-products" >
        <p className="carousel-title">See our phones that we're selling!</p>
        <CarouselTheProducts/>
        
        
    </div>
    )
};
export default Products;
//exported to checkout and shop