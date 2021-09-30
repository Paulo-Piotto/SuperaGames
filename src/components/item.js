import styled from "styled-components";
import data from '../products.json';
import {img} from '../getImages'

export default function Item({index, game}){
    const image = img;

    return(
        <ItemContainer>
            <img src={image[index]} alt='' />
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
    background-color: white;
    border-radius: 8px;

    &:hover{
        filter: brightness(1.5);
        cursor: pointer;
    }
    
    img{
        height: 45%;
        margin-top: 8%;
    }

    div{
        width: 90%;
        height: 55%;
        margin-top: 5%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        span{
            text-align: center;
            font-weight: bold;
        }

        p{
            margin-bottom: 8%;
            font-size: 0.8rem;
        }
    }


    @media(min-width: 900px){
        width: 20%;
        height: 35vh;
        margin-right: 20px;
    }
`