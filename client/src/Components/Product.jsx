import React from "react";
import CarouselTheProducts from "./Carousel/indexProduct"; // automatically goes to /index.jsx
// import "../public/CSS/style.css"
import WatchesRow from "./Carousel/indexProRow";

function Products() {
    return (
    <div className="products" >
        <CarouselTheProducts/>
        <p></p>
        <WatchesRow/>
    </div>
    )
};
export default Products;
//exported to checkout and shop