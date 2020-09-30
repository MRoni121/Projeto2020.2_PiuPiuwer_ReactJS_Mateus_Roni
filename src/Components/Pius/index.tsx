import React, { useCallback, useContext, useEffect, useState } from 'react';
import AuthContext from '../../hooks/useAuth';
import axios from 'axios';

import LogoImg from '../../Imagens/Logo.svg';
import CloseButton from '../../Imagens/close.svg';
import LikeButton from '../../Imagens/gostar.svg';
import LikedButton from '../../Imagens/gostarClicado.svg';

import {
    BaseDoPiu,
    Likers,
    Piu1,
    Piu2,
    TopoDoPiu,
    User,
    Username
 } from './styles';

export interface PiuProps {
    favoritado_por: Array<object>;
    likers: Array<Usuario>;
    usuario: Usuario;
    texto: string;
    horario: string;
    id: number;
}

interface Usuario {
    email: string;
    first_name: string;
    last_name: string;
    username: string;
    foto: string;
    sobre: string;
    id: number;
}


const Piu: React.FC<PiuProps> = (props) => {
    
    const {user} = useContext(AuthContext);
    const [liked, setLiked] = useState(false);

    useEffect(() => {
        setLiked(false);
        props.likers.map((pessoa) => {
            if(user.id === pessoa.id){
                setLiked(true);
            }
        })
    }, [props.likers, user.id]);
    

    const handleLike = useCallback( async() => {
        const token = localStorage.getItem('@Piupiuwer:token');

        await axios({
            url: 'http://piupiuwer.polijr.com.br/pius/dar-like/',
            method: 'POST',
            headers: {
                Authorization: `JWT ${token}`
            },
            data: {
                usuario: user.id,
                piu: props.id
            }
         })
      
    }, [user, props.id]);

    const handleApagar = useCallback( async () => {
        await axios({
            url: `http://piupiuwer.polijr.com.br/pius/${props.id}`,
            method: 'DELETE',
         });

    }, [props.id]);

    return(
        <div>
            <Piu1>
                <TopoDoPiu>
                    <User foto ={props.usuario.foto}>
                        <div></div>
                        <Username>
                            <h3>{props.usuario.first_name} {props.usuario.last_name}</h3>
                            <h4>@{props.usuario.username}</h4>
                        </Username>
                    </User>
                    <img src={LogoImg} alt="Logo"/>
                </TopoDoPiu>

                <p>{props.texto}</p>
            </Piu1>

            <Piu2>
                <BaseDoPiu>
                    <button onClick={handleLike}>
                        {liked ? <img src={LikedButton} alt="Like"/>
                               : <img src={LikeButton} alt="Liked"/>
                        }
                            <p>{props.likers.length}</p>
    
                        </button>

                        <Likers>
                        {props.likers.slice(0, 3).map((pessoa) => {
                            return(
                                <div key={pessoa.id}>
                                    <img src={pessoa.foto} alt="foto"/>
                                </div>
                                )
                                
                            })
                        }
                        </Likers>
                        
                    <button onClick={handleApagar} >
                        {props.usuario.id === user.id
                            ? <img src={CloseButton} alt="X"/>
                            : <div></div>    
                        }
                    </button>
                </BaseDoPiu>
            </Piu2>
        </div>
    );
}

export default Piu;