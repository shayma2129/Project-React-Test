import React from "react";
import "./Slide.css";
import img1 from "../Slide/slide1.jpg";
import img2 from "../Slide/slide2.jpg";
import img3 from "../Slide/slide3.jpg";

import { Carousel } from "react-bootstrap";

export default function Slide() {
  return (
    <>
      <Carousel>
        <Carousel.Item className="carousel-Item">
          <img className="d-block w-100" src={img1} alt="First slide" />
          <Carousel.Caption>
            <h3>“A room without books is like a body without a soul.”</h3>
            <p>― Marcus Tullius Cicero</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-Item">
          <img className="d-block w-100" src={img2} alt="Third slide" />

          <Carousel.Caption>
            <h3>“I have always imagined that Paradise will be a kind of library.”</h3>
            <p>― Jorge Luis Borges</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="carousel-Item">
          <img className="d-block w-100" src={img3} alt="Third slide" />

          <Carousel.Caption>
            <h3> Books are a uniquely portable magic.</h3>
            <p>– Stephen King</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
