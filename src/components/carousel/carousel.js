import React, { useState } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';
import carrousel1 from '../../images/carroussell-1.svg';
import carrousel2 from '../../images/carroussell-3.svg';
import carrousel3 from '../../images/testimonio-1.svg';
import carrousel4 from '../../images/testimonio-2.svg';


const items = [
  {
    src: carrousel1,
    altText: 'Slide 1',
    caption: '',
    className: 'carousel-picture'
  },
  {
    src: carrousel2,
    altText: 'Slide 2',
    caption: '',
    className: 'carousel-picture'
  },
  {
    src: carrousel3,
    altText: 'Slide 3',
    caption: '',
    className: 'carousel-picture'
  },
  {
    src: carrousel4,
    altText: 'Slide 3',
    caption: '',
    className: 'carousel-picture'
  }
];

const MyCarousel = (props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  }

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  }

  const goToIndex = (newIndex) => {
    if (animating) return;
    setActiveIndex(newIndex);
  }

  const slides = items.map((item) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
        className="carousel-bg"
      >
        
        <img src={item.src} alt={item.altText} className={item.className} id={item.id} />
        <CarouselCaption captionText={item.caption} captionHeader={item.caption} style={{color: "#4D554F"}}/>
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
    >
      <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} className="CarouselIndicators"/>
      {slides}
      <CarouselControl id="carousel-control" direction="prev" directionText="Previous" onClickHandler={previous} className="CarouselIndicators"/>
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} className="CarouselIndicators"/>
    </Carousel>
  );
}

export default MyCarousel;