import { createGlobalStyle } from "styled-components";
import { colors } from "./Colors";

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
}
html {
  background: ${colors.background};
h1 {
  font-family: "brandon-grotesque", sans-serif;
  text-transform: uppercase;
  color: ${colors.primary};
  margin: 0;
}

h3 {
  font-family: "brandon-grotesque", sans-serif;
  color: ${colors.primary};
  line-height: 20px;
}
}

 /* Small devices (phones, up to 767px) */
@media (max-width: 767px) {
    html {
      margin: 1rem;
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
      margin: 2rem;
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
      margin: 2rem 10vw;
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
