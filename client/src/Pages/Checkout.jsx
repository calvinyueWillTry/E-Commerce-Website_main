import React from "react";
import Products from "../Components/Product";
import Sales from "../Components/Sales";
function Checkout() {
    return(
        <div>
            <Products/>
            buying product
            <Sales/>
            on sale
            <form onSubmit={submitImage}>
            <input type="file" accept="image/*" onChange={onInputChange}></input>
             <button type="submit">Submit</button>
            </form>
        </div>
    ) //form from Kyler
};
export default Checkout;