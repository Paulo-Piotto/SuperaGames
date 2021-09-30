import carrinho from '../assets/cart-icon.svg'
import styled from 'styled-components';

export default function Header(){
    return(
        <Head>
            <h1>SuperaGames</h1>
            <Cart src={carrinho} />
        </Head>
    );
}

const Head = styled.header`
    width: 100vw;
    height: 70px;
    position: fixed;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: 'Changa One', cursive;
    color: #ffbf51;
    background-color: purple;
    font-size: 1.6rem;
    padding-left: 5%;
    box-shadow: 0 3px 5px rgba(0,0,0,0.6);
    z-index: 1;
`

const Cart = styled.img`
    height: 50%;
    margin-right: 8%;

    &:hover{
        filter: brightness(1.5);
    }
`