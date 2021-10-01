import styled from "styled-components";
import Item from "./item";
import {games} from '../getData'
import { useState } from "react";

export default function GamesList(){
    const [products, setProducts] = useState(games);



    function compare(a,b){
        return a.score < b.score ? 1 : a.score > b.score ? -1 : 0;
    }
    function sortByScore(){
        setProducts([...products.sort(compare)])
    }
    


    return(
        <ListContainer onClick={sortByScore}>
            {products.map((game, index) => 
                <Item key={index} index={index} game={game}/>
            )}
        </ListContainer>
    );
}

const ListContainer = styled.div`
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media(min-width: 900px){
        width: 80vw;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
`