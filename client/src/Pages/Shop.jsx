import React from "react";
import Products from "../Components/Product";
import Sales from "../Components/Sales";

function Shopping() {
    return (
        <div>
            <Sales/>
            What are you buying?
            <Products/>
        </div>
    )
};
export default Shopping;