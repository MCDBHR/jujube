import styled, { css } from 'styled-components';

const SlideImage = styled.img`
  width: 400px;
  height: 300px;
  object-fit: cover;
`;

const StyledSlider = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`
const CarouselContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

`;
const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  position: relative;
`;

const ThumbnailsContainerWrapper = styled.div`
  overflow: scroll;
  scroll-bar-width: none;
  max-height: 600px;
  overflow: hidden;
  position: relative;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (max-height: 1100px) {
    max-height: 350px;
  }
`;

const ThumbnailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  transform: translateY(-${(props) => props.thumbnailIndex * 85}px);
  transition: transform .25s ease-in-out;
  @media (max-height: 1100px) {
    transform: translateY(-${(props) => props.thumbnailIndex * 65}px);
  }
`;

const ThumbnailContainer = styled.button`
  width: 75px;
  height: 75px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 0;

  @media (max-height: 1100px) {
    height: 60px;
    width: 60px;
  }

  &:hover {
    cursor: pointer;
    border: 1px solid white;
  }

  ${(props) => props.selected && css`
    & {
      border: 1px solid white;
    }
  `}

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }

  &:focus {
    outline: none;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 60%;
  }
`;

const ArrowButton = styled.button`
  position: absolute;
  z-index: 1;
  top: 95%;
  transform: translateY(-50%);
  width: 48px;
  height: 48px;
  border-radius: 100%;
  border: none;
  box-shadow: 1px 1px 3px rgba(0,0,0,.25);
  transition: all .25s ease;
  font-weight: bold;
  background-color: rgba(255,255,255, 0.75);
  backdrop-filter: blur(2px);

  @media (max-height: 1100px) {
    height: 36px;
    width: 36px;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgb(246,246,246);
  }
`;

const ThumbnailArrowContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  width: 36px;
  border: none;
  border-radius: 100%;
  transition: all .2s ease;
  background-color: rgba(255,255,255,.75);

  @media (max-height: 1100px) {
    height: 24px;
    width: 24px;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    background-color: rgb(246,246,246);
  }

  &[disabled] {
    cursor: not-allowed;
  }
`;

const ThumbnailControlsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  position: absolute;
  top: 5%;
  left: 2.5%;
  z-index: 5;

  & > .thumbnail-control {
    transition: all .2s ease;
    color: black;
  }

  & > .thumbnail-control:hover {
    cursor: pointer;
    color: rgb(90,90,90);
  }
`;

const CarouselContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const CarouselContent = styled.div`
  display: flex;
  transition: all .2s ease;
  -ms-overflow-style: none;
  scroll-bar-width: none;
  height: 900px;

  &::-webkit-scrollbar {
    display: none;
  }

  & > * {
    flex-shrink: 0;
    flex-grow: 1;
  }

  @media (max-height: 1100px) {
    height: 650px;
  }

  & > .gallery-image {
    background-size: cover;
  }

  ${(props) => props.expanded && css`
    & > .gallery-image {
      background-size: contain;
    }
  `}
`;
const FullScreenButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 48px;
  position: absolute;
  top: 2.5%;
  right: 2.5%;
  z-index: 5;
  cursor: pointer;
  color: black;
  transition: all .2s ease;
  background-color: rgba(255,255,255,.75);
  padding: .5em;
  border-radius: 100%;
  border: none;
  font-weight: bold;

  @media (max-height: 1100px) {
    height: 36px;
    width: 36px;
  }

  &:hover {
    background-color: rgb(246,246,246)
  }

  &:focus {
    outline: none;
  }
`;

export {
  SlideImage,
  StyledSlider,
  CarouselContainer,
  CarouselWrapper,
  ThumbnailsContainerWrapper,
  ThumbnailsContainer,
  ThumbnailContainer,
  ArrowButton,
  ThumbnailArrowContainer,
  ThumbnailControlsContainer,
  CarouselContentWrapper,
  CarouselContent,
  FullScreenButtonContainer
}