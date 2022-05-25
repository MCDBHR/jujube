import styled from 'styled-components';

const Nav = styled.header`
display: flex;
gap: 2em;
align-items: center;
height: 75px;
background-color: white;
width: 100vw;
max-width: 1400px;
margin: 0 auto 1em;
box-shadow: 0 3px 3px rgba(0,0,0,.75);
position: sticky;
top: 0%;
z-index: 9999;
padding: .6em 2em;
`;


export { Nav };