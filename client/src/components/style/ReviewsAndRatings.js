import styled, { css } from 'styled-components';
import Flexbox from '../style/Flexbox.js';

const RRFlexContainer = styled.div`
  display: flex;
  justify.content: space-inbetween;
`
const RatingsStyle = styled.div`
  flex: 0.3;
  flex-direction: row;
`;

const ReviewsStyle = styled.div`
  flex: .7;
  flex-direction: row;
  overflow-y: scroll;
  scrollbar-width: thin;
`
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(255, 255, 255, 0.8);
  z-index: 50;
`

const ModalStyle = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  border-width: thick;
  padding: 60px;
  background: white;
  z-index: 51;
`
export {
  RRFlexContainer,
  RatingsStyle,
  ReviewsStyle,
  ModalStyle,
  ModalBackground
}