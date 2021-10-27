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

 /* Small devices (phones, up to 767px) */
@media (max-width: 767px) {
    html {
      h1 {
        font-size: 20px;
      }
      h3 {
        font-size: 20px;
      }
    }
} 

/* Medium devices (tablets, 768px and up) */
@media (min-width: 768px) {
    html {
      h1 {
        font-size: 28px;
      } 
      h3 {
        font-size: 20px;
      }
    }
}

/* Large devices (desktops, 992px and up) */
@media (min-width: 992px) {
    html {
      h1 {
        font-size: 32px;
      }
      h3 {
        font-size: 24px;
      }
    }
}
`;

export default GlobalStyle;
