import React, { useState, useEffect, useRef } from 'react';
import { FaArrowAltCircleUp, FaArrowAltCircleDown} from 'react-icons/fa';
import Thumbnails from './Thumbnails.js';
import {
  SlideImage,
  CarouselContainer,
  CarouselWrapper,
  ThumbnailsContainerWrapper,
  ThumbnailsContainer,
  ThumbnailContainer,
  ArrowButton,
  ThumbnailArrowContainer,
  ThumbnailControlsContainer,
  CarouselContent,
  CarouselContentWrapper} from '../style/Carousel.js'

/*-------------Main Function------------------*/
const Gallery = ({defaultStyle,expandedHandler,expanded}) => {
//main image
  const defaultUrl = 'https://images.unsplash.com/photo-1590564310418-66304f55a2c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2970&q=80';
  const images = defaultStyle.photos.reduce((img, current) => {
    img.push(current.url ?? defaultUrl);
    return img;
  },[])

  const [currentMain, setMain] = useState(0);
  const [length, setLength] = useState(images.length);
  useEffect(()=>{
    setLength(images.length);
  }, [images])

  const nextMainImg = () => {
    setMain(currentMain === images.length - 1 ? 0 : currentMain + 1);
  };
  const prevMainImg = () => {
    setMain(currentMain === 0 ? images.length - 1 : currentMain - 1);
  };


//thumbnails
  const thumbnailsImg = defaultStyle.photos.reduce((img, current) => {
    img.push(current.thumbnail_url ?? defaultUrl);
    return img;
  }, []);

  const [thumbIndex, setThumbIndex] = useState(0);
  const Thumbslength = thumbnailsImg.length;

  const nextImg = () => {
    setThumbIndex(thumbIndex === Thumbslength - 1 ? 0 : thumbIndex + 1);
  };

  const prevImg = () => {
    setThumbIndex(thumbIndex === 0 ? Thumbslength - 1 : thumbIndex - 1);
  };

//handle Main image change
  const selectImage = (index) => {
    setMain(index);
  }

//handle zoom
const [zoom, setZoom] = useState(false);
const zoomScale = 1.75;
const handleZoom = () => {
  setZoom((prevState) => !prevState)
}
const isDisabled = zoom;

//handle mouse hover
const carouselSelect = useRef(null);
const [mouseX, setMouseX] = useState(null);
const [mouseY, setMouseY] = useState(null);
const handleMouseHover = (event) => {
  const DOMRect = carouselSelect.current.getBoundingClientRect();
    const {
      height, width, left: offsetLeft, top: offsetTop,
    } = DOMRect;
    const x = ((event.pageX - offsetLeft) / width) * 100;
    const y = ((event.pageY - offsetTop) / height) * 100;
    setMouseX(x);
    setMouseY(y);
}
const transformOrigin = {
  transformOrigin: `${mouseX}% ${mouseY}%`,
};
//img style
const mainStyle = {
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  transition: 'transform .2s ease-out',
  backgroundImage: `url(${images[currentMain]})`,
}

const galleryContainerStyle = {
  overflow: 'hidden',
};
  return(
    <CarouselContainer>
      <CarouselWrapper>
        {currentMain > 0 &&
        (
          <ArrowButton
          disabled={isDisabled}
          style={{ left: '18px' }}
          onClick={prevMainImg}
          aria-label="previous-image"
        >
        </ArrowButton>
        )}
        <ThumbnailControlsContainer>
        {
            length > 6 && (
              <ThumbnailArrowContainer
                disabled={isDisabled}
                onClick={prevImg}
                aria-label="previous-thumbnail"
              >
                {/* <FontAwesomeIcon
                  icon={solid('arrow-up')}
                  className="thumbnail-control"
                /> */}
              </ThumbnailArrowContainer>
            )
          }
        <ThumbnailsContainerWrapper>
          <ThumbnailsContainer
            thumbnailIndex={thumbIndex}>
              {images.map((img,i) => (
                <ThumbnailContainer
                  onClick={() => selectImage(i)}
                  selected={i === currentMain}
                  key={i}
                  disabled={isDisabled}
                  aria-label="carousel-thumbnail"
                >
                <img src={img} key={i} alt="" />
          </ThumbnailContainer>
      ))}
      </ThumbnailsContainer>
      </ThumbnailsContainerWrapper>
      {
            length > 6 && (
              <ThumbnailArrowContainer
                disabled={isDisabled}
                onClick={nextImg}
                aria-label="next-thumbnail"
              >
                {/* <FontAwesomeIcon
                  icon={solid('arrow-down')}
                  className="thumbnail-control"
                /> */}
              </ThumbnailArrowContainer>
            )
          }
        </ThumbnailControlsContainer>


{/*
        <FullScreenButtonContainer
          onClick={handleExpand}
          disabled={isDisabled}
          aria-label="expand-image"
        >
          <FontAwesomeIcon
            icon={solid('expand')}
          />
        </FullScreenButtonContainer> */}

          <CarouselContentWrapper>
          <CarouselContent
            style={galleryContainerStyle}
            ref={carouselSelect}
            onClick={handleZoom}
            onMouseMove={handleMouseHover}
            expanded={expanded}
          >
            <div
              style={{
                ...mainStyle,
                transform: zoom ? `scale(${zoomScale})` : 'scale(1)',
                cursor: zoom ? 'zoom-out' : 'zoom-in',
                ...transformOrigin,
              }}
              className="gallery-image"
            />
          </CarouselContent>
          </CarouselContentWrapper>
      </CarouselWrapper>
    </CarouselContainer>

  )

}

export default Gallery;

// <FaChevronUp
//         onClick={prevImg}
//       />
//       {thumbnailsImg.map((img, index) => {
//         return (
//           <div key={index}>
//             {index === thumbIndex && (
//               <SlideImage src={img} alt="" />
//             )}
//           </div>
//         );
//       })}
//         <FaChevronDown
//         onClick={nextImg}
//       />


// {/* {thumbnails.map((imgs,i) => {
//       return <img src={imgs} key={i} />
//     })} */}
//  // <Thumbnails thumbs={thumbnailsImg}/>
