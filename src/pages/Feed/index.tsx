import React, { useCallback, useContext, useEffect, useState } from 'react';
import Piu from '../../Components/Pius/';

import LogoImg from '../../Imagens/Logo.svg';
import LupaImg from '../../Imagens/Lupa.svg';
import NotificationImg from '../../Imagens/notificacao.svg';
import ExitImg from '../../Imagens/exit.svg';
import {PiuProps} from '../../Components/Pius';

//import PerfilDefaultImg from '../../Imagens/Foto.jpeg'
import {
  BasePartePiar,
  BotaoPiar,
  FeedContainer, 
  Header, 
  LogoHeader, 
  Perfil, 
  SearchBox, 
  Section,
  TopoPartePiar
} from './styles';

import AuthContext from '../../hooks/useAuth';
import api from '../../api';
import axios from 'axios';
import {AuthState} from '../../hooks/useAuth';

interface PiuInfoProps {
    id: number;
    texto: string;
}


const Feed: React.FC = () => {

    const {user} = useContext(AuthContext);
    const {setUserData} = useContext(AuthContext);
    const [pius, setPius] = useState<PiuProps[]>([]);
    const [erro, setErro] = useState("");
    const [contador, setContador] = useState(0);
    const [textoPiu, setTextoPiu] = useState("");
    // const [piuInfo, setPiuInfo] = useState<PiuInfoProps>({} as PiuInfoProps);


    const carregarPius = useCallback(async () => {
        const response = await api.get("/pius/");
        setPius(response.data);
    },[setPius]);

    const delay = useCallback((delay: number) => {
        return new Promise( res => setTimeout(res, delay) );
    },[])

    useEffect(() => {
        const recarregaContinuamente = async () => {
            while (true) {
                carregarPius();
                await delay(1000);
            }
        }

        recarregaContinuamente();
    }, [carregarPius, delay]);

    const postPiu = useCallback( async() => {
        /*setPiuInfo({id: user.id, texto: textoPiu});
        const response = await api.post('/pius/', piuInfo);
        console.log(response);*/

        const response = await axios({
            url: 'http://piupiuwer.polijr.com.br/pius/',
            method: 'POST',
            data: {
                usuario: user.id,
                texto: textoPiu
            }
         })
         if(response.status === 201) {
             carregarPius();
         }
      
    }, [textoPiu, user, carregarPius]);

    const handleClick = useCallback(() => {
        if(contador === 0){
            setErro("Você tem que digitar alguma coisa");
        }
        else if(contador < 140){
            /*postar o piu*/
            postPiu();
            setErro("");
            setTextoPiu("");
            setContador(0);
            
        }
    },[contador, setErro, setTextoPiu, setContador, postPiu]);

    const handleInputChange = useCallback((event) => {
        setTextoPiu(event.target.value)
        setContador(event.target.value.length);
        if(event.target.value.length > 140) {
            setErro("Você estourou o limite de caracteres");
        }
        else {
            setErro("");
        }
    },[setContador, setErro, setTextoPiu]);

    const logout = useCallback(() => {
    localStorage.removeItem('@Piupiuwer:user');
    localStorage.removeItem('@Piupiuwer:token');

    setUserData({} as AuthState);
    },[setUserData])



  return(
    <FeedContainer>
        <Header>
            <LogoHeader>
                <img src={LogoImg} alt="Logo"/>PiuPiuwer
            </LogoHeader>

            <SearchBox>
                <input type="text" placeholder="Pesquisar"/>
                <button id="pesquisa">
                    <img src={LupaImg} alt="lupa"/>
                </button>
              </SearchBox>

            <Perfil>
                <button>
                    <img src={NotificationImg} alt="Notificação"/>    
                </button>
                <button>
                    <img src={user.foto} alt="Foto de perfil"/>
                </button>
                <button onClick={logout}>
                    <img src={ExitImg} alt="Logout"/>
                </button>
            </Perfil>
        </Header>


        <Section>
            <TopoPartePiar>
                <h3>Faça um novo piu!</h3>
                <img src={LogoImg} alt="Logo"/>
            </TopoPartePiar>
            
            <hr/>
            
            <BasePartePiar>
                <textarea value={textoPiu} name="text" wrap="soft" placeholder="Digite aqui: " onChange={handleInputChange} ></textarea>
                
                <BotaoPiar estourado={!!erro}>
                    <p>{erro}</p>
                    <div>
                        <p>{contador}/140</p>
                        <button onClick={handleClick}>
                            <p>Piar</p>
                        </button>
                    </div>
                </BotaoPiar>
            </BasePartePiar>
            
            {pius.map((piu) =>{
                return( 
                    <Piu key={piu.id} usuario={piu.usuario} favoritado_por={piu.favoritado_por} likers={piu.likers} texto={piu.texto} horario={piu.horario} id={piu.id}  />
                );
            })}

          </Section>
            


    </FeedContainer>
  )
}

export default Feed;