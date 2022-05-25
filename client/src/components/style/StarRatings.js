import styled from 'styled-components';

export const StarRatings = styled.div`
background: linear-gradient(90deg, #FDCC0D 0 ${(props) => props.average / 5 * 100}%, grey ${(props) => props.average / 5 * 100}% 100%);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`