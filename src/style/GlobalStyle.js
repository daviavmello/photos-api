import { createGlobalStyle } from "styled-components";
import { colors } from "./Colors";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
html {
  background: ${colors.background};
  margin: 2rem;
h1 {
  span {
    font-weight: 400;
    margin: 0;
    display: inline-block;
  }
  font-family: Arial, Helvetica, sans-serif;
  text-transform: capitalize;
  color: ${colors.primary};
  margin: 1rem;
}

h3 {
  font-family: Arial, Helvetica, sans-serif;
  text-transform: capitalize;
  color: ${colors.primary};
}
}
`;

export default GlobalStyle;
