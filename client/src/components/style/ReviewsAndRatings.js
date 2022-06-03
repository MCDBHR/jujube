import styled, { css } from 'styled-components';
import Flexbox from '../style/Flexbox.js';

const RRFlexContainer = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-direction: row;
  justify.content: space-inbetween;
`;
const RatingsStyle = styled.div`
  flex: 0.3;
  box-sizing: border-box;
  flex-direction: row;
  padding: 10px;
`;

const ReviewsStyle = styled.div`
  flex: .7;
  flex-direction: row;
  box-sizing: border-box;
  padding: 10px;
`
const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(255, 147, 147, 0.8);
  z-index: 50;
`

const ModalStyle = styled.div`
  margin-top: 30px;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-style: solid;
  border-width: thin;
  border-radius: 8px;
  box-shadow: 20px 20px 20px 10px #de4044;
  padding: 20px;
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