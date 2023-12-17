import React from "react";
import { images } from "../services/Services.jsx";
import {
  IoMdArrowDropleft,
  IoMdArrowDropright,
} from "react-icons/io";
import "../styles/Carousel.scss";
import { useState } from "react";

const Carousel = () => {
  const [currImg, setCurrImg] = useState(0);
  return (
    <div className="carousel">
      <div
        className="innerCarousel"
        style={{ backgroundImage: `url(${images[currImg].img})` }}
      >
        <div
          className="left"
          onClick={() => {
            currImg > 0 && setCurrImg(currImg - 1);
          }}
        >
          <IoMdArrowDropleft style={{ fontSize: "30px",color:"white" }} />
        </div>

        <div className="center">
            <h1>{images[currImg].title}</h1>
            <p>{images[currImg].subtitle}</p>
        </div>
        
        <div
          className="right"
          onClick={() => {
            currImg < images.length - 1 && setCurrImg(currImg + 1);
          }}
        >
          <IoMdArrowDropright style={{ fontSize: "30px",color:"white"}} />
        </div>
      </div>
    </div>
  );
};

export default Carousel;
