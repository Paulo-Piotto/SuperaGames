import { useHistory } from "react-router";
import { MainContainer } from "./gamesList";
import { IoCloseCircleSharp } from "react-icons/io5"
import styled from "styled-components";

export default function Deleted(){
    const history = useHistory()

    return(
        <MainContainer>
            <GenericContainer >
                <p>Produto removido do carrinho!</p>
                <Icon />
                <button onClick={() => history.push('/checkout')}>Voltar ao carrinho</button>
                <span onClick={() => history.push('/')}>Voltar para a página inicial</span>
            </GenericContainer>
        </MainContainer>
    );
}

const GenericContainer = styled.div`
    width: 80%;
    background-color: white;
    border-radius: 5px;
    padding: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;

    p{
        font-weight: bold;
    }

    button{
        margin: 4% 0 4% 0;
        border: none;
        border-radius: 5px;
        outline: none;
        padding: 8px 20%;
        color: white;
        background-color: #38a8ff;
        font-weight: bold;
    }

    button:hover{
        filter: brightness(1.1);
        cursor: pointer;
    }

    

    span{
        font-size: 0.8rem;
        text-decoration: underline;
        color: #38a8ff;
        margin-bottom: 30px;
    }

    span:hover{
        cursor: pointer;
    }
`

const Icon = styled(IoCloseCircleSharp)`
    color: red;
    margin-top: 2%;
    font-size: 2.5rem;
`

export {
    GenericContainer
}