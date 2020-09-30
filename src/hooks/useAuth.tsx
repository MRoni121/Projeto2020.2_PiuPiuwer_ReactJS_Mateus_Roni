import React, { useCallback } from 'react';
import {createContext, useState} from 'react';
import api from '../api';

export interface AuthState {
    token: string;
    user: User;
}

interface AuthContextData {
    cred: Cred;
    setCred(cred: Cred): void
    userData: AuthState;
    setUserData(userData: AuthState): void;
    login(cred: Cred): void;
    user: User;
    token: string;
    usernameError: string; 
    passwordError: string; 
    loginError: string;
}

interface Cred {
    username?: string;
    password?: string;
}

interface User {
    email: string;
    first_name: string;
    last_name: string;
    username: string;
    sobre: string;
    id: number;
    foto: string;
    seguidores?: Array<object>;
    seguindo?: Array<object>;
    favoritos?: Array<object>;
    pius?: Array<object>;
}


const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export const AuthProvider: React.FC = ({children}) => {

    const [cred, setCred] = useState<Cred>({} as Cred);
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [loginError, setLoginError] = useState("");

    const [userData, setUserData] = useState<AuthState>(() => {
        const token = localStorage.getItem('@Piupiuwer:token');
        const user = localStorage.getItem('@Piupiuwer:user');

        if (user && token) {
            api.defaults.headers.Authorization = `JWT ${token}`;
            return({token: token, user: JSON.parse(user)});
        }

        return {} as AuthState;
    });

    const login = useCallback(async (cred: Cred) => {
        try{ 
            const response = await api.post('/login/', cred);
            const {token} = response.data;
            localStorage.setItem('@Piupiuwer:token', token);
            api.defaults.headers.Authorization = `JWT ${token}`;
            
            if(!!token){
                setLoginError("");
                const response1 = await api.get("/usuarios/"); 
                let users: User[] =  response1.data;
                users.map((item) => {
                    if(item.username === cred.username) {
                        setUserData({token: token, user: item});
                        console.log(userData);
                        localStorage.setItem('@Piupiuwer:user', JSON.stringify(item));
                    }
                });
            }
        } catch(err) {
            const {data} = err.response;
            setLoginError("Coloque usuário e senha válidos");

            if (data.username !== undefined && data.username[0] === "Este campo é obrigatório.") {
                setUsernameError("Este campo é obrigatório.");
            }
            else {
                setUsernameError("");
            }

            if (data.password !== undefined && data.password[0] === "Este campo é obrigatório.") {
                setPasswordError("Este campo é obrigatório.");
            }
            else {
                setPasswordError("");
            }

            if (data.global !== undefined && data.global[0] === "Impossível fazer login com as credenciais fornecidas.") {
                setUsernameError("");
                setPasswordError("");
            }

        }
        /*ver se token existe e tratar erros*/
        
    },[setUsernameError, setPasswordError, userData]) ;


    return (
        <AuthContext.Provider value = {{
            cred, 
            setCred, 
            userData, 
            user:userData.user, 
            token: userData.token, 
            setUserData, 
            login, 
            usernameError, 
            passwordError, 
            loginError
        }} >
            {children}
        </AuthContext.Provider>

    );
}

export default AuthContext;