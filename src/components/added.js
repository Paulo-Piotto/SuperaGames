import { GenericContainer } from "./deleted";
import { MainContainer } from "./gamesList";
import { useHistory } from "react-router";
import { IoCheckmarkCircleSharp } from "react-icons/io5"
import styled from "styled-components";

export default function Added(){
    const history = useHistory()

    return(
        <MainContainer>
            <GenericContainer >
                <p>Produto adicinado ao carrinho!</p>
                <Icon />
                <button onClick={() => history.push('/checkout')}>Ir para o carrinho</button>
                <span onClick={() => history.push('/')}>Voltar para a página inicial</span>
            </GenericContainer>
        </MainContainer>
    );
}

const Icon = styled(IoCheckmarkCircleSharp)`
    color: green;
    margin-top: 2%;
    font-size: 2.5rem;
`