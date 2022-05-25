import styled, { css } from 'styled-components';

const GalleryContainer = styled.div`
  width: 70%;
  border-radius: 2px;
  transition: all .2s ease;

  ${(props) => props.expanded && css`
    width: 100%;
  `}

  @media (max-height: 1100px) {
    height: 650px;
    width: 550px;
    ${(props) => props.expanded && css`
      width: 100%;
    `}
  }

  @media (max-width: 1010px) {
    width: 100%;
  }
`;


export default GalleryContainer;
