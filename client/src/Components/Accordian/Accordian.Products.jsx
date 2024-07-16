import Accordion from 'react-bootstrap/Accordion';

function ProductAccordianTemplate(props) {
  return (
    <Accordion defaultActiveKey="0">

      <Accordion.Item eventKey="0">
        <Accordion.Header>{props.header}</Accordion.Header>
        <Accordion.Body>
          {props.description} 
          
        </Accordion.Body>
      </Accordion.Item>
      
    </Accordion>
  );//add to line 11 {props.price}?
};

export default ProductAccordianTemplate;