import styled from 'styled-components';

interface UserProps {
    foto: string;
};

export const PiuCompleto = styled.div`
    width: 100%;
`;

export const Username = styled.div `
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 10px;

    h3{
        font-size: 20px;
    }

    h4{ 
        font-size: 15px;
    }
`;

export const User = styled.div<UserProps>`

    display: flex;
    align-items: center;


    div:first-child {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: 1px solid black;
        background: url(${props => props.foto});
        background-size: cover;

    }

`;

export const TopoDoPiu = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 5px;

    
    img {
        margin-right: 20px;
        width: 25px;
    }
`;

export const Piu1 = styled.div`
    background: rgba(255, 255, 255, 0.2);
    border-top-right-radius: 44px;
    border-top-left-radius: 44px;
    width: 100%;
    padding: 5px 10px;
    margin: 20px 0px 0px 0px;
    border: none;
    border-bottom: 1px solid black;

    p{   
    Word-wrap: break-Word;
    margin: 10px 0px;
    padding: 10px 40px;
    font-size: 15px;
    }
`;

export const Piu2 = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        width: 100%;
        background: rgba(255, 255, 255, 0.2);
        border-bottom-right-radius: 44px;
        border-bottom-left-radius: 44px;
        padding: 5px 20px;
        border: none;
`;

export const BaseDoPiu = styled.div`
    display: flex;
    padding: 5px 30px;
    img{
        width: 25px;
    }

    button{
        margin-right: 5px;
        display: flex;
        align-items:center;
        justify-content: center;
    }

    button p {
        margin: 0 0 0 2px;
    }


`;

export const Likers = styled.div`
display: flex;
align-items: center;
justify-content: center;
max-width: 60px;
overflow: hidden;
margin-right: 10px;

> div {
    margin-left: 3px;
}

div {
    width: 20px;
    height: 20px;
    overflow: hidden;
    border-radius: 50%;
    margin: 0;
}

img {
    width: 20px;
    height: 20px;
    object-fit: cover;

}
`;