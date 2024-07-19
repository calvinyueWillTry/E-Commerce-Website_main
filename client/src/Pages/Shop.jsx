import React from "react";
import Products from "../Components/Product";
import Sales from "../Components/Sales";
import WatchesRow from "../Components/Carousel/indexProRow";
import "../public/CSS/shop.css"

function Shopping() {
    return (
        <div className="container-fluid">
    <div className="row">
      <div className="col-md-12">
        <p className="sale-text">Browse below to see what it's all about!</p>
        <div className="sales" style={{ width: '100%' }}><Sales/></div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <p className="product-text">What are you buying?</p>
        <div className="products"><WatchesRow/></div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">
        <div><Products/></div>
      </div>
    </div>
  </div>
    )
};
export default Shopping;
//