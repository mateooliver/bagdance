import React from "react";
import { Carousel } from "react-bootstrap";

const CarouselBienvenida = () => {
  return (
    <div>
        <Carousel className="col-12">
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require("../img/carousel1.png")}
      alt="First slide"
    />
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={require('../img/carousel2.png')}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Compartimento ideal para nuestra actividad</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  {/* <Carousel.Item>
    <img
      className="d-block w-100"
      src="holder.js/800x400?text=Third slide&bg=20232a"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item> */}
</Carousel>
    </div>
  )
}

export default CarouselBienvenida
