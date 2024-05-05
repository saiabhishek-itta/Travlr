import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

export default function Carousel() {
  return (
    <MDBCarousel showIndicators showControls fade>
      <MDBCarouselItem
        className='w-100 d-block'
        itemId={1}
        src={require('./images/california.jpg')}
        alt='...'
      >
        <h5><b>California</b></h5>
        <p><b>Palm Springs ~ Santa Monica ~ San Jose</b></p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={2}
        src={require('./images/Newyork.jpg')}
        alt='...'
      >
        <h5><b>New York</b></h5>
        <p><b>Central Park ~ Statue of Liberty ~ Times Square</b></p>
      </MDBCarouselItem>

      <MDBCarouselItem
        className='w-100 d-block'
        itemId={3}
        src={require('./images/Hawaii.jpg')}
        alt='...'
      >
        <h5><b>Hawaii</b></h5>
        <p><b>Maui ~ Honolulu ~ Lahaina</b></p>
      </MDBCarouselItem>
    </MDBCarousel>
  );
}