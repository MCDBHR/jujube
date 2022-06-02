import styled from 'styled-components';

export const FlexContainer = styled.ol`
  display: flex;
  flexDirection: row;
  justifyContent: flex-start;
  overflow: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
  gap: 100px;
  &::-webkit-scrollbar {
    display: none;
  }
`

export const H2 = styled.h2`
  text-align: center;
`