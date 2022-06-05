import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: row;
  justify-content: left;
  padding: 10px;
`;

const InnerStar = styled.div`
  &:before {
    display: block;
    content: '\\2605\\2605\\2605\\2605\\2605';
    width: 0;
    font-size: 20px;
  }
  position: absolute;
  color: #de4044;
  overflow: hidden;
  z-index: 8;
`;
const OuterStar = styled.div`
  &:before {
    position: relative;
    content: '\\2605\\2605\\2605\\2605\\2605';
    color: #ded1d1;
    font-size: 20px;
  }
  position: relative;
  display: inline-block;
`;

export {
  Container,
  InnerStar,
  OuterStar
}