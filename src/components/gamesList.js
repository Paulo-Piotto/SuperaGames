import styled from "styled-components";
import data from '../products.json'; 
import Item from "./item";

export default function GamesList(){
    const products = data;

    return(
        <ListContainer>
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