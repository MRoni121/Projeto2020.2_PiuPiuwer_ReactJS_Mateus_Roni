import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  @media(min-width: 700px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 0 3rem 0;

  h1{
    color: var(--color-piupiuwer-text);
    font-size: 7rem;
    margin-left: 1.5rem;
  }

  img{
    width: 10rem;
  }


  @media(min-width: 700px) {
    h1 {
      font-size: 8rem;
    }

    img {
      width: 12rem;
    }
  }


`;

export const LandingText = styled.div`
  display:flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 65%;
  h2 {
    font-size: 3rem;
    text-align: start;
  }
  
  @media(min-width: 700px) {
    margin-bottom: 10rem;
    max-width: 60rem;
    h2{
      font-size: 4rem;
    }
  }

`;

export const LoginBox = styled.div`
  transition-property: all;
  transition-duration: 0.5s;
  height: 50%;
  width: 65%;
  border-radius: 3rem;
  /*border: 1px black solid;*/
  padding: 5rem;

  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  background: var(--color-login-box);

  input {
    width: 40rem;
    background: transparent;
    border-radius: 2rem;
    border: 1px solid black;
    padding: 1rem;
  }

  button {
    background: var(--color-login-button);
    transition: background-color 0.5s, letter-spacing 0.5s;
    border-radius: 3rem;
    width: 40rem;
    height: 7rem;
    border: none;
  }

  button:hover {
    cursor: pointer;
    background: var(--color-login-button-hover);
    letter-spacing: 3px;
  }

  p {
    color: var(--color-login-box);
    font-size: 2.6rem;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  h3 {
    color: #4558f4;
  }

  h3:hover {
    cursor: pointer;
  }

  button:last-child {
    width: 30rem;
    background: #08cd95;
    color: #d2e9f0;
    font-size: 2.4rem;
    transition: background-color 0.5s, letter-spacing 0.5s;
  }

  button:last-child:hover {
    background: #06a67d;
    letter-spacing: 3px;
  }

  hr{
    width: 80%;
    border-top: 1px solid #5E60CE;
    border-bottom: none;
    color: transparent;
    background-color: transparent;
  }

  h4 {
    font-size: 1.8rem;
    color: red;
    align-self: center;
  }
  
  @media(min-width: 700px) {
    padding: 5rem;
    max-width: 50rem;
    height: 60%;

    input:first-of-type {
      margin-bottom: 0;
    }
  }



`;


