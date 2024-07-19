import React, { useState } from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { useParams, Link } from 'react-router-dom'; 
//import {CREATE_REVIEW} from "../utils/mutations";

function EntryReview() {
    let { userID } = useParams();

    const [user, setUser] = useState(""); //users only can leave reviews
    const [reviewer, setReviewer] = useState("");
    const [feedback, setFeedback] = useState("");

    return (
    <form>  
        <div>
            <p>If you would like to leave a review, please fill out the following to post a review</p>
            <div>
                <input className="contactus" placeholder="Name*" 
                          type="text" name="Name" value={user} 
                             required/>
            </div>
            <div>
                <input className="contactus" placeholder="Product*" 
                          type="text" name="Name" value={reviewer} 
                             required/>
            </div>
            <div>
                <textarea className="textarea" placeholder="Message*" 
                          type="type" name="text" Message="Leave your feedback" 
                             value = {feedback} required/>
            </div>
        </div>
    </form>  
    );
}
export default EntryReview;