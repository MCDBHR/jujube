import styled, { css } from 'styled-components';
import Flexbox from '../style/Flexbox.js';

const ProductDetailContainer =  styled.div`
  width: 30%;
  transition: all .2s ease;

  ${(props) => props.expanded && css`
   @media (min-width: 1010px) {
      display: none;
   }
  `}

  @media (max-width: 1010px) {
    width: 100%;
  }
`;

export default ProductDetailContainer;
