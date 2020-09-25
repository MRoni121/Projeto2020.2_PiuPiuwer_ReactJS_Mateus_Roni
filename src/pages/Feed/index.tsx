import React from 'react';

import LogoImg from '../../Imagens/Logo.svg';
import LupaImg from '../../Imagens/Lupa.svg';
import NotificationImg from '../../Imagens/notificacao.svg';
import PerfilDefaultImg from '../../Imagens/Foto.jpeg'
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

const Feed: React.FC = () => {
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
                    <img src={PerfilDefaultImg} alt="Foto de perfil"/>
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
                <textarea name="text" wrap="soft" placeholder="Digite aqui: "></textarea>
                
                <BotaoPiar>
                    <p>Você precisa escrever algo
                      {/*deveria ser visível somente se o usuário ainda
                      não tivesse digitado*/}</p>
                    <div>
                        <p>{/*deveria guardar o contador*/}</p>
                        <button>
                            <p>Piar</p>
                        </button>
                    </div>
                    
                </BotaoPiar>
            </BasePartePiar>
          </Section>

    </FeedContainer>
  )
}

export default Feed;