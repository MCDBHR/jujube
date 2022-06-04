import styled from 'styled-components';

const RatingsBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0.6em 0 0.6em 0;
`;

const Bar = styled.div`
  background-color: #e8dbd8;
  border-radius: 4px;
  height: 1em;
  margin: 0.1em 0 0.5em 0;
`;

const Arrow = styled.div`
  width: 0;
  height: 0;
  position: relative;
  left: ${({ pos }) => (pos / 5) * 100}%;
  border-left: 0.5em solid transparent;
  border-right: 0.5em solid transparent;
  border-top: 1em solid #ed424c;
`;

const UnderText = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 0.8em;
  font-family: "Petrona";
`;

const CharacteristicName = styled.div`
  font-size: 1.2em;
  font-weight: bold;
  font-family: "Petrona";
`;

export {
  RatingsBarContainer,
  Bar,
  Arrow,
  UnderText,
  CharacteristicName
}