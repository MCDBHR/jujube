import styled from 'styled-components';

const StyledBodyContainer = styled.input`
  width: 100%;
  height: 35px;
  word-wrap:break-word;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 5px;
  resize: none;
  `;

const StyledSummaryContainer = styled.input`
  display: relative;
  width: 98%;
  height: 25px;
  border: 2px solid #ccc;
  border-radius: 5px;
`;

const Container = styled.div`
    margin: 10px 0;
  `;

export {
  StyledBodyContainer,
  StyledSummaryContainer,
  Container
}
