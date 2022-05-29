import styled from 'styled-components';
import FlexContainer from './Flexbox';

const ProductDetailsContainer = styled(FlexContainer)`
  @media (max-width: 1010px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    & h1 {
      margin-bottom: 0;
    }

    & > #details-ratings-container {
      align-items: flex-end;
    }
  }
`;

export default ProductDetailsContainer;