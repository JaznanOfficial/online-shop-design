import React from 'react';
import { Carousel } from 'react-bootstrap';

const Sliders = () => {
    return (
        <div>
            
            <h1 className='text-center'>Sliders</h1>
        <Carousel variant="dark">
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src="https://www.pngitem.com/pimgs/m/178-1783030_online-shopping-logo-png-transparent-png.png"
                        alt="First slide"
          />
          <Carousel.Caption>
            <h5>First slide label</h5>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src="https://www.pngitem.com/pimgs/m/178-1783030_online-shopping-logo-png-transparent-png.png"
            alt="Second slide"
          />
          <Carousel.Caption>
            <h5>Second slide label</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-50 mx-auto"
            src="https://www.pngitem.com/pimgs/m/178-1783030_online-shopping-logo-png-transparent-png.png"
            alt="Third slide"
          />
          <Carousel.Caption>
            <h5>Third slide label</h5>
            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
        </div>
    );
};

export default Sliders;