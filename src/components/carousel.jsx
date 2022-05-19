import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselBienvenida = () => {
  return (
    <div>
        <Carousel className="col-10 mx-auto">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="/img/carousel1.png"
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src='/img/carousel2.png'
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Compartimento ideal para nuestra actividad</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
    </div>
  )
}

export default CarouselBienvenida
