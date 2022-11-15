import React from "react";
// https://www.npmjs.com/package/react-material-ui-carousel
import Carousel from 'react-material-ui-carousel';
import './style.css';

function MainCarousel () {
 const colors = ['red', 'yellow', 'red'];
 return (
  <div className="carousel-wrap">
   <Carousel height={"500px"}>
    {
     colors.map(color => <div
      style={{ backgroundColor: color }}
      className="carousel-elem"></div>)
    }
   </Carousel>
  </div>
 );
}

export default MainCarousel;