import React from "react";
import Blogging from "../Components/Carousel/Blog";
//import Modal from "../Components/Modal";
import EntryReview from "../Components/EntryReview";
//need to send the strings (in variable form) to the backend. Test it with graphql, then take the successful "Table" and add it to mutations.js
function Reviews() { //reviewForm (week 21 challenge)

    return (
        <div>
            <img src="/src/public/images/banner-image.png" />
            
            <Blogging/>
            <EntryReview/>
            
            <button >Submit Your Review</button>
        </div>
    )
};//button needs to get to backend (mutations.js)
export default Reviews;
//Exported to Main
