import styled from "styled-components";
import { MainContainer } from "./gamesList";
import CartContext from "../contexts/cartContext";
import { useContext } from "react";
import CartItem from "./cartItem";
import Checkout from "./checkout";
import { useHistory } from "react-router-dom";
import { IoCloseOutline } from "react-icons/io5"

export default function CartPage(){
    const { cart, setCart } = useContext(CartContext);
    const history = useHistory();
    

    return (
        <MainContainer>
            <Title>Seu Carrinho: </Title>
            <CartContainer>
                
                {cart[0] ? 
                <>
                <ItemsContainer>
                    {cart.map((item, index) => <CartItem key={index} item={item}/>)}
                </ItemsContainer>
                <Checkout cart={cart} />
                <Finish>
                    <button onClick={() => {
                        setCart([]);
                        history.push('/finished')
                        }}>Finalizar compra</button>
                    <p onClick={() => history.push('/')}>Voltar para a página inicial</p>
                </Finish>
                </>
            :   <>
                     <Close onClick={() => history.push('/')}/>
                    <Empty>Ops...Parece que seu carrinho está vazio!</Empty>
                </>
            }
                
            </CartContainer>
        </MainContainer>
    );
}

const Title = styled.h1`
    font-weight: bold;
    font-size: 1.2rem;
`

const CartContainer = styled.div`
    width: 85%;
    min-height: 40vh;
    background-color: white;
    color: black;
    border-radius: 8px;
    margin-top: 5%;
    padding: 15px;
    position: relative;

    @media(min-width: 900px){
        padding: 5% 15px 15px 15px;
        width: 50%;
    }
`

const ItemsContainer = styled.div`
`
const Finish =  styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    button{
        margin: 13% 0 4% 0;
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

    

    p{
        font-size: 0.8rem;
        text-decoration: underline;
        color: #38a8ff;
        margin-bottom: 30px;
    }

    p:hover{
        cursor: pointer;
    }
`
const Empty = styled.p`
    text-align: center;
    margin-top: 50px;
`
const Close = styled(IoCloseOutline)`
    position: absolute;
    right: 10px;
    top: 6px;
    color: red;
    font-size: 1.6rem;

    &:hover{
        cursor: pointer;
    }
`