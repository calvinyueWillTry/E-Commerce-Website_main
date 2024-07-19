import React, { useState } from 'react';
import { Nav, NavDropdown, Modal, Tab } from "react-bootstrap";
import ReviewForm from './Accordian/reviewForm';
import Accordion from 'react-bootstrap/Accordion';

function DropdownProductReview(){
    return ( 
    <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
            <Accordion.Header>See previous reviews of this product!</Accordion.Header>
            <Accordion.Body>
                <ReviewForm/>
            </Accordion.Body>
        </Accordion.Item>
    </Accordion>
    )
};
export default DropdownProductReview;
//exported to Sales, Accordian.Products, indexProduct, and indexProRow