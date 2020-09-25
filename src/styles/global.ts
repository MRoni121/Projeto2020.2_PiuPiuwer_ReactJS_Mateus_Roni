import { createGlobalStyle } from  'styled-components';

export default createGlobalStyle `
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
  -webkit-font-smoothing: antialiased;
  font-family: 'bitter';
}

:root {
  --color-background: #8BBACA;
  --color-login-box: #B9D6DF;
  --color-login-button: #4558F4;
  --color-login-button-hover: #3140BF;
  --color-piupiuwer-text: #5E60CE;

  font-size: 45%;
}

html, body, #root {
  height: 100vh;
}

body {
  background: var(--color-background);

}
.container {
  width: 90vw;
  max-width: 700px;
}

button{
    outline: none;
    background-color: transparent;
    border: none;
}

button:hover {
    cursor: pointer;
}

@media (min-width: 700px){
  :root {
    font-size: 50%;
  }
  
}
`;