import Carousel from 'react-bootstrap/Carousel';
import ProductAccordianTemplate from '../Accordian/Accordian.Products';
import ProductItemization from '../../Pages/Process.Products.jsx/DynamicProducts';

function CarouselTheProducts() { //insert map function to the carousels 
  return (
    <Carousel interval={null} >
      <Carousel.Item>
       <img src='/src/public/images/product-item1.jpg' />
        <Carousel.Caption>
          <ProductAccordianTemplate header={"Used iPhone"} description={"unknown info, but comes with earpods"}/>
          <button>Add to Cart</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='/src/public/images/product-item2.jpg' />
        <Carousel.Caption>
          <ProductAccordianTemplate header={"iPhone X"} description={"2018, still very durable"} />
          <button>Add to Cart</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='/src/public/images/product-item3.jpg' />
        <Carousel.Caption>
          <ProductAccordianTemplate header={"iPhone X1"} description={"older phone"}/>
          <button>Add to Cart</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='/src/public/images/product-item4.jpg' />
        <Carousel.Caption>
          <ProductAccordianTemplate header={"iPhone XIV"} description={"2022, the new old"} />
          <button>Add to Cart</button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src='/src/public/images/product-item5.jpg' />
        <Carousel.Caption>
          <ProductAccordianTemplate header={"iPhone XV"} description={"The newest of the new"} />
          <button>Add to Cart</button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselTheProducts;
//exported to product
