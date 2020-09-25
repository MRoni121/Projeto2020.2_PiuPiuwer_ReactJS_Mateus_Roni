import styled from 'styled-components';

export const FeedContainer = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: rgba(255, 255, 255, 0.43);
  height: 10rem;
  width: 100%;
  margin: 0 auto 3rem 0;
  padding: 0 8.7rem;


`;

export const LogoHeader = styled.div`
  display: flex;
  align-items: center;

  font-family: 'Bitter';
  font-style: normal;
  font-weight: bold;
  font-size: 2rem;
  color: #5E60CE;
  img {
    width: 4rem;
  }

  @media(min-width: 700px) {
    font-size: 4.5rem;
    img {
    width: 8rem;
    }

  }
`;

export const SearchBox = styled.div`
  background: rgba(255, 251, 251, 0.37);
  display: flex;
  align-items: center;
  height: 2.5rem;

  input{
    height: fit-content;
    background: transparent;
    outline: none;
    border: none;
    font-size: 2.45rem;
    padding: 0 1.25rem;
  }

  button{
    margin-right: 1.25rem;
    padding-top: 0.62rem;
  }

  button img {
    width: 1.7rem;
  }

  @media(min-width: 700px) {
    height: 4.36rem;

    button img {
      width: 2.8rem;
    }
    
  }

  
`;


export const Perfil = styled.div`
  display: flex;
  width: fit-content;

  button{
    margin-left: 3.72rem;
  }

  button img{
    width: 5rem;
  }

  button + button img{
  width: 6.2rem !important;
  height: 6.2rem;
  border-radius: 50%;
  border: 1px solid black;
  margin-right: 1.24rem;
  overflow: hidden;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  width: 60%;

  hr {
    border-top: 1px dashed #5E60CE;
    border-bottom: none;
    color: transparent;
    background-color: transparent;
  }
`;

export const TopoPartePiar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.2);
  border-top-right-radius: 44px;
  border-top-left-radius: 44px;
  width: 100%;
  padding: 0.62rem 1.24rem;
  margin: 2.5px 0px 0px 0px;
  border: none;
  border-bottom: 0px;

  h3 {
    padding: 0 2.5rem;
    font-size: 2rem;
  }

  img {
    width: 5.6rem;
    margin-right: 1.86rem;
  }
`;

export const BasePartePiar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  border-bottom-right-radius: 44px;
  border-bottom-left-radius: 44px;
  padding: 0.62rem 2.5rem;
  border: none;
  border-top: 0px;

  textarea{
    width: 100%;
    height: 9.92rem;
    background-color: transparent;
    border: none;
    padding: 0.62rem 3.72rem;
    outline: none;
    resize: none;
    font-size: 1.86rem;
    overflow: hidden;  
  }

  button {
    background-color: #4558f4;
    border-radius: 10px;
    width: 11.16rem;
    height: 3.1rem;
    margin: 0 1.24rem;
  }
  
  button p{
    color: #6FA5B8;
    font-weight: bold;
  }

`;

export const BotaoPiar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  p {
    align-self: flex-end;
  }

  div{
    display: flex;
    align-items: center;
  }

`;