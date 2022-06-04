import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const BarContainer = styled.div`
  display: flex;
  padding: 3px;
  border-radius: 8px;
  flex-direction: row;
  margin: 0.5em 0 0.5em 0;
  align-items: center;
  &:hover {
    background-color: #f9d4d3;
  }
`;

const Bar = styled.div`
  display: flex;
  border-radius: 4px;
  background-color: #e8dbd8;
  height: 1em;
  width: 100%;
`;

const FilledData = styled.div`
  background-color: #ed424c;
  z-index:2;
  border-radius: 4px;
  width: ${({ width }) => width}%;
  height: 1em;
  `
const StarRatingNum = styled.div`
  font-size: .9em;
  width: 25%;
  font-weight: bold
  font-family: 'Petrona';
  text-decoration: underline;
`;

const Count = styled.p`
  font-size: 0.8em;
  padding: 0 0 0 0.7em;
`;

export {
  Container,
  BarContainer,
  Bar,
  FilledData,
  StarRatingNum,
  Count
}