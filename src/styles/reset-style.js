import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html {
    font-size: 62.5%;
    font-family: 'Lato', sans-serif;
  }
  ::-webkit-scrollbar {
    width: 1.5rem;
  }
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    /* border-radius: 10px; */
  }
  
  ::-webkit-scrollbar-thumb {
    transition: .2s ease;
    background: gray; 
    /* border-radius: 10px; */
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #1ac5f4; 
  }
  
`