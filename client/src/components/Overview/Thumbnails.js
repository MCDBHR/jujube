import React, { useState, useEffect } from 'react';
import { SlideImage,  StyledSlider } from '../style/Carousel';
import {
  FaChevronUp,
  FaChevronDown,
} from "react-icons/fa";

/*-------------Main Function------------------*/
const Thumbnails =({thumbs}) => {
  const [current, setCurrent] = useState(0);
  const length = thumbs.length;

  const nextImg = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevImg = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  return (
    <div>
      {console.log(thumbs)}
      <img src={thumbs[0]}/>
    </div>
    // <StyledSlider>
    //   <FaChevronUp
    //     className="left-arrow"
    //     onClick={prevImg}
    //   />
    //   {thumbs.map((img, index) => {
    //     return (
    //       <div key={index}>
    //         {index === current && (
    //           <SlideImage src={img} alt="" />
    //         )}
    //       </div>
    //     );
    //   })}
    //   <FaChevronDown
    //     className="right-arrow"
    //     onClick={nextImg}
    //   />
    // </StyledSlider>
  );
}


export default Thumbnails

// return(

// )