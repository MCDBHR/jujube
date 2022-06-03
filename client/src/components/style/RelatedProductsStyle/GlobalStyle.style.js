import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  // * {
  //   margin: 0;
  //   padding: 0;
  //   box-sizing: border-box;
  // }

  html {
    scroll-padding-top: 200px;
    font-family: 'Petrona', serif;
  }

  a:visited {
    text-decoration: none;
  }
  button:hover {
    cursor: pointer;
  }
`