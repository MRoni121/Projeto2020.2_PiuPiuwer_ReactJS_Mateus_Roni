import React, { useCallback, useEffect, useState } from 'react';
import LogoImg from '../../Imagens/Logo.svg';
import axios from 'axios';

import {
  MainContainer,
  LogoContainer, 
  LandingText, 
  LoginBox

} from './styles';



const Landing: React.FC = () => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  

  /*recebe como parametros função a ser executada/array de dependências*/
  const handleClick = useCallback(async () => {
    const response = await axios({
      url: 'http://piupiuwer.polijr.com.br/login/',
      method: 'POST',
      data: {
        username: username,
        password: password
      }

      /*talvez criar um useContext aqui para armazenar o token*/

    });
    /* não sei se rola dar um return response.data.token;*/
  }, [username, password])
  
  return (
    <MainContainer >

      <LandingText>
        <LogoContainer >
          <img src={LogoImg} alt="Logo"/>
          <h1>PiuPiuwer</h1>
        </LogoContainer>
        <h2 id="landing-text">Conecte-se e compartilhe com as pessoas que fazem parte de sua vida com a ajuda do PiuPiuwer</h2>
      </LandingText>

      <LoginBox>
        <input 
          type="text" 
          placeholder = "Digite o nome de usuário: "
          onChange = {(e) => { setUsername(e.target.value)} }  
        />
        <input 
          type = "password" 
          placeholder = "Digite sua senha: "
          onChange = {(e) => { setPassword(e.target.value) } }
        />
        <button onClick={handleClick}><p>Entrar</p></button>
      </LoginBox>
    
    </MainContainer>
  )
}

export default Landing;
