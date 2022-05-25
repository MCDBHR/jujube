import styled, { css } from 'styled-components';
import Flexbox from '../style/Flexbox.js';

const OverviewContainer = styled(Flexbox)`
  @media (max-width: 1010px) {
    flex-direction: column;
  }
`;
export default OverviewContainer;
