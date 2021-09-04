import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    ::after,
    ::before {
      margin: 0;
      padding: 0;
      box-sizing: inherit;
    }
    
    html {
      font-size: 62.5%;
    }
    
    body {
      box-sizing: border-box;
      font-family: 'poppins', sans-serif;
    }
    
    a {
      text-decoration: none;
    }
    // Just as a test if active works since problem with styling
    a.active {
      text-transform: uppercase;
    }
    
    ul, li {
      list-style: none;
    }
`;