import carrinho from '../assets/cart-icon.svg'
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../contexts/cartContext';

export default function Header(){
    const history = useHistory();
    const  { cart } = useContext(CartContext);

    return(
        <Head>
            <h1 onClick={() => history.push('/')} >SuperaGames</h1>
            <section>
                <div>
                    <span>{cart.length}</span>
                </div>
                <Cart src={carrinho} onClick={() => history.push('/checkout')} />
            </section>
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

    h1:hover{
        cursor: pointer;
    }

    @media(min-width: 900px){
        font-size: 2rem;
    }

    section{
        position: absolute;
        display: flex;
        top: 20px;
        right: 8%;

        div{
            color: white;
            font-size: 0.8rem;
            border-radius: 50%;
            background-color: green;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 30px;
            height: 25px;
        }
    }
`

const Cart = styled.img`
    height: 30px;
    margin-right: 8%;

    &:hover{
        filter: brightness(1.5);
        cursor: pointer;
    }
`