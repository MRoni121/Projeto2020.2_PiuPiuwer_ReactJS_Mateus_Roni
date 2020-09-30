import React, { useCallback, useContext } from 'react';
import LogoImg from '../../Imagens/Logo.svg';
import AuthContext from '../../hooks/useAuth';

import {
  MainContainer,
  LogoContainer, 
  LandingText, 
  LoginBox

} from './styles';


const Landing: React.FC = () => {

  const {cred} = useContext(AuthContext);
  const {setCred} = useContext(AuthContext);
  const {login} = useContext(AuthContext);
  const {usernameError} = useContext(AuthContext);
  const {passwordError} = useContext(AuthContext);
  const {loginError} = useContext(AuthContext);

  /*recebe como parametros função a ser executada/array de dependências*/
  const handleClick = useCallback(() => {
    login(cred);

 
  }, [cred, login]);



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
        <div>
          <input 
            type="text" 
            placeholder = "Digite o nome de usuário: "
            onChange = {e => { setCred({...cred, username: e.target.value})} }  
          />
          <h4>{usernameError}</h4>
        </div>

        <div>
          <input 
            type = "password" 
            placeholder = "Digite sua senha: "
            onChange = {(e) => { setCred({...cred, password: e.target.value}) } }
          />
          <h4>{passwordError}</h4>
        </div>

        <div>
          <button onClick={handleClick}><p>Entrar</p></button>
          <h4>{loginError}</h4>
        </div>

        <h3>Esqueceu sua senha?</h3>
        <hr/>

        <button>Criar nova conta</button>

      </LoginBox>
    
    </MainContainer>
  )
}

export default Landing;
