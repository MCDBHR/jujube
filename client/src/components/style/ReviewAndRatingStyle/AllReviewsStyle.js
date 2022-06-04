import styled from 'styled-components';

const ReviewContainer = styled.div`
  max-height: 580px;
  overflow: scroll;
  margin-right:20px;
  scrollbar-width: thin;
  scrollbar-color: #f9d4d3 #f35a64;
`
const Container = styled.div`
  padding: 20px;
`
const SortingContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  align-items: center;
  padding: 5px;
`
const DropDownContainer = styled.select`
  width: 100px;
  height: 30px;
  font-family: 'Petrona';
  font-weight: 500;
  border-radius: 5px;
  background-color: #e8dbd8;
  position: relative;
  menu>ul>li>ul {
    position: absolute;
    background-color: #555;
    width: 100%;
    left: 0;
    top: 100%;
    z-index: 1;
}
`
const Button = styled.button`
  margin-right: 10px;
  background-color: #e8dbd8;
  border: 2px solid #f35a64;
  border-radius: 30px;
  box-shadow: #cf2b2a 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-family: 'Patrona';
  font-size: 13px;
  font-weight: 600;
  padding: 5 15px;
  line-height: 30px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  z-index: 5;

  :hover {
    background-color: #f35a64;
  }
  @media (min-width: 768px) {
    min-width: 120px;
    padding: 0 25px;
  }
`
export {
  ReviewContainer,
  Container,
  SortingContainer,
  DropDownContainer,
  Button
}