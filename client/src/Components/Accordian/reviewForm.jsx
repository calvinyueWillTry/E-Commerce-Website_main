import React, { useState } from 'react';
import { Nav, NavDropdown, Form, Button, Alert } from "react-bootstrap";

function ReviewForm() {
    const [userFormationData, setUserFormationData] = useState({review:""});
    const [validation] = useState(false);
    const [displayAlert, setDisplayAlert] = useState(false);

    const handleFeedbackChange = (event) => {
        const { name, value } = event.target;
        setUserFormationData({ ...userFormationData, [name]: value });
      };

    const handleFormatSubmission = async (event) => {
        event.preventDefault();
        const formatting = event.currentTarget;  
        if (formatting.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
          };

// clear form values
        setUserFormationData({review:""});
    };
    
    return (     
<> 
<Form 
    noValidate 
    validated={validation} 
    onSubmit={handleFormatSubmission} > 
    <Alert 
    dismissible 
    onClose={() => setDisplayAlert(false)} 
    show={displayAlert} 
    variant="danger" > 
        Check your entry, as something either went wrong or was inputted incorrectly!
    </Alert>

    <Form.Group className='mb-3'>
        <Form.Label htmlFor="review">
            Please input your review on this product. 
        </Form.Label> 
         <Form.Control
        type="text"
        placeholder="How should I put it?"
        name="review"
        onChange={handleFeedbackChange}
        value={userFormationData.review}
        required > 
        </Form.Control>
        <Form.Control.Feedback
        type="invalid">
            You are required to enter your Password.
        </Form.Control.Feedback>

    </Form.Group>

        <Button
        disabled={!(userFormationData.review)}
        type="submit"
        variant="success" >
                Submit Your Review
        </Button>
</Form>
</>
    );
};
export default ReviewForm;