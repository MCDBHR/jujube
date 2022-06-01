import styled from 'styled-components';

const Nav = styled.header`
display: flex;
gap: 2em;
align-items: center;
height: 75px;
background-color: white;
justify-content: flex-end;
width: 100vw;
max-width: 1400px;
margin: 0 auto 1em;
box-shadow: 0 3px 3px rgba(0,0,0,.75);
position: sticky;
top: 0%;
z-index: 9999;
padding: .6em 2em;
`;

const Navheader = styled.h2`
color: black;
font-size: 2em;
text-shadow:  0.5em 0.3em #E0E0E0;
font-family: 'Josh', sans-serif;
margin-right:auto;
& > a {
  color: white;
  text-decoration: none;
  transition: all .2s ease;
  position: relative;
}

@media (max-width: 900px) {
  & > a {
    font-size: .8em;
  }
}

& > a:focus {
  outline: none;
}

& > a:visited {
  color: white;
}
`;
const NavList = styled.ul`
  font-size: 0.8rem;
  display: flex;
  justify-content: flex-end;
  align-items: right;
  list-style: none;
  padding-left: 0;
  font-family: 'Josh', sans-serif;
  text-shadow:  0.5em 0.3em #E0E0E0;
  @media (max-width: 620px) {
    display: none;
  }

  & > li a {
    color: black;
    text-decoration: none;
    transition: all .2s ease;
    position: relative;
  }

  @media (max-width: 900px) {
    & > li a {
      font-size: .8em;
    }
  }

  & > li a:focus {
    outline: none;
  }

  & > li {
    margin-left: 1.5em;
  }

  & > li a:visited {
    color: black;
  }

  & > li a::after {
    content: '';
    height: 2px;
    background-color: black;
    width: 100%;
    transform-origin: center;
    position: absolute;
    bottom: -5%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 0;
    transition: all .2s ease;
  }

  & > li a:hover::after {
    opacity: 1;
  }
`;
export { Nav,Navheader,NavList };