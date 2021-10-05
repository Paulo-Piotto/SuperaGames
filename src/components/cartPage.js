import styled from "styled-components";
import { MainContainer } from "./gamesList";
import CartContext from "../contexts/cartContext";
import { useContext } from "react";
import CartItem from "./cartItem";

export default function CartPage(){
    const { cart } = useContext(CartContext);

    return (
        <MainContainer>
            <Title>Seu Carrinho: </Title>
            <CartContainer>
                {cart[0] ? 
                <ItemsContainer>
                    {cart.map((item) => <CartItem key={item.id} item={item}/>)}
                </ItemsContainer>
            : <p>Ops...Parece que seu carrinho está vazio!</p>
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
    min-height: 70vh;
    background-color: #51D074;
    color: white;
    border-radius: 8px;
    margin-top: 5%;
    padding: 15px;
`

const ItemsContainer = styled.div`
`