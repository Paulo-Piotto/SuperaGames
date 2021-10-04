import styled from "styled-components";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { games } from "../services/getData";
import { MainContainer } from "./gamesList";
import CartContext from "../contexts/cartContext";

export default function GamePage(){
    const gameId = useParams().id;
    const game =  games.filter((product) => 
        product.id === Number(gameId) ? true : false
    )
    const { cart, setCart } = useContext(CartContext);

    function addToCart(){
        setCart([...cart, game[0]])
    }

    return(
        <MainContainer>
            <GameContainer>
                <img src={game[0].image} alt='' onClick={() => console.log(cart)}/>
                <InfoContainer>
                    <p>{game[0].name}</p>
                    <div>
                        <span>Valor:</span>
                        <span>{game[0].price.toFixed(2)}</span>
                    </div>
                </InfoContainer>
                <Button onClick={addToCart}>Adicionar ao Carrinho</Button>
            </GameContainer>
        </MainContainer>
    );
}

const GameContainer =  styled.div`
    width: 85%;
    height: 78vh;
    background-color: white;
    border-radius: 6px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 5%;

    img{
        height: 40%;
        margin-bottom: 5%;
    }

    @media(min-width: 900px){
        flex-direction: row;
        width: 70%;
        height: 60vh;

        img{
            width: 40%;
            height: auto;
        }
    }
`

const InfoContainer = styled.div`
    height: 35%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;

    p{
        text-align: center;
        font-weight: bold;
    }
    
   span{
       margin-right: 8px;
   }
   
   @media(min-width: 900px){
       width: 80%;
       height: 50%;
       margin-left: 5%;
   }
` 

const Button = styled.button`
    margin-top: 20%;

    @media(min-width: 900px){
        margin-top: 29%;
    }
`