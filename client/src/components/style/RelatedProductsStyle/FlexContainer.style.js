import styled from 'styled-components';

export const FlexContainer = styled.ol`
  display: flex;
  flexDirection: row;
  justifyContent: flex-start;
  overflow: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  gap: 50px;
  &::-webkit-scrollbar {
    display: none;
  }
`
export const CarouselContainer = styled.div`
  width: 80vw;
  margin: auto;
  position: relative;
`
export const H2 = styled.h2`
  text-align: center;
  margin-bottom: 20px;
  border-bottom: 1px solid rgba(0, 0, 0, .3);
  padding-bottom: 10px;
  font-size: 25px;
`

export const CarouselBtnContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const CarouselBtn = styled.a`
  background-color: none;
  color: black;
  text-decoration: none;
  line-height: 450px;
  font-size: 30px;
  height: 200px;

  &:visited {
    color: black;
    text-decoration: none;
  }

  &:active {
    text-decoration: none;
  }

`
export const CarouselInner = styled.div`
  display: flex;
  flex: row;
`