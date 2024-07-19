import Accordion from 'react-bootstrap/Accordion';
//import ReviewFormat from './reviewForm';
import DropdownProductReview from '../Accord.Modal';

function ProductAccordianTemplate(props) {
  return (
    <Accordion defaultActiveKey="0">

      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.header}</Accordion.Header>
        <Accordion.Body>
          {props.description} 
          
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item>
        <DropdownProductReview/>
      </Accordion.Item>
    </Accordion>
  );
};

export default ProductAccordianTemplate;