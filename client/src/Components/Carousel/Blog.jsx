import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import "../Carousel/Carousel.css"

function Blogging() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="review-carousel">
    <Carousel interval={null} activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img src="/src/public/images/insta-item1.jpg"/>
        <Carousel.Caption>
          <h3>"This site is not so bad!"</h3>
          <p>Author: Calvin Yue</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="/src/public/images/insta-item2.jpg"/>
        <Carousel.Caption>
          <h3>"But not so good either"</h3>
          <p>Author: Austin Marlatt</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/src/public/images/insta-item3.jpg"/>
        <Carousel.Caption>
          <h3>"The site is still a work in progress"</h3>
          <p>Author: Kyler Gibbs</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/src/public/images/insta-item4.jpg"/>
        <Carousel.Caption>
          <h3>"Why do we need the images in the background in order for the text to show up?"</h3>
          <p>Author: Alex Austin</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src="/src/public/images/insta-item5.jpg"/>
        <Carousel.Caption>
          <h3>"This is an A++!"</h3>
          <p>Author: Alex Sigala</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
};

export default Blogging;
//Blogging exported to Reviews
