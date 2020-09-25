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
  height: 50%;
  width: 65%;
  border-radius: 3rem;
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
    margin: -8rem 0 4rem 0;
  }

  button {
    background: var(--color-login-button);
    transition: background-color 0.5s;
    border-radius: 3rem;
    width: 40rem;
    height: 7rem;
    margin-top: -8rem;
    border: none;
  }

  button:hover {
    cursor: pointer;
    background: var(--color-login-button-hover);
  }

  p {
    color: var(--color-login-box);
    font-size: 2.6rem;
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


