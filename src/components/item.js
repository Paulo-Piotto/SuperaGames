import styled from "styled-components";
import { useHistory } from "react-router-dom";

export default function Item({game}){
    const history = useHistory();

    return(
        <ItemContainer onClick={() => history.push(`/game/${game.id}`)}>
            <img src={game.image} alt='' />
            <div>
                <span>{game.name}</span>
                <p>R$ {game.price.toFixed(2)}</p>
            </div>
        </ItemContainer>
    );
}

const ItemContainer = styled.div`
    width: 80%;
    height: 40vh;
    margin-bottom: 15px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #c5c5c5;
    /* background-color: white;
    border-radius: 8px; */

    &:hover{
        /* filter: brightness(1.5); */
        cursor: pointer;
    }
    
    img{
        height: 50%;
        margin-top: 8%;
    }

    div{
        width: 90%;
        height: 50%;
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span{
            text-align: center;
            /* font-weight: bold; */
            color: #6b6b6b;
            font-size: 0.7rem;
        }

        p{
            margin-bottom: 8%;
            font-size: 0.7rem;
            font-weight: bold;
        }
    }


    @media(min-width: 900px){
        width: 20%;
        height: 35vh;
        margin-right: 20px;
        border-bottom: none;
        border-right: 1px solid #c5c5c5;
    }
`