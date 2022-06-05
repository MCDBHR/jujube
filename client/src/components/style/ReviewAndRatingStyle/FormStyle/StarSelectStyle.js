import styled from 'styled-components';
import {FaStar} from 'react-icons/fa';


const AllStarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

const StarAndLabelContainer = styled.div`
  flex-direction: column;
`

const RadioStar = styled.input`
  display: none;
`
const CenterStar = styled.label`
  display: flex;
  justify-content: center;
`

export {
  AllStarContainer,
  StarAndLabelContainer,
  RadioStar,
  CenterStar
}