import styled from "styled-components";
import Item from "./item";
import { games } from '../services/getData'
import { useState } from "react";
import { byScore, byName, byPrice, byRandom } from "../services/services";

export default function GamesList(){
    const [products, setProducts] = useState(games);
    const [sortBy,  setSortBy] = useState('none');
    
    function sort(){
        if(sortBy === 'score'){
            setProducts([...products.sort(byScore)])
        }else if(sortBy === 'price'){
            setProducts([...products.sort(byPrice)])
        }else if(sortBy === 'name'){
            setProducts([...products.sort(byName)])
        }else {
            setProducts([...products.sort(byRandom)])
        }
    }


    return(
        <MainContainer>
            <SortContainer>
                <span>Ordenar por: </span>
                <select onChange={(e) => setSortBy(e.target.value)}>
                    <option value='none'>Padrão</option>
                    <option value='price'>Preço</option>
                    <option value='score'>Popularidade</option>
                    <option value='name'>Nome</option>
                </select>
                <button onClick={sort}>Aplicar</button>
            </SortContainer>
            <ListContainer>
                {products.map((game) => 
                    <Item key={game.id} game={game}/>
                )}
            </ListContainer>
        </MainContainer>
    );
}

const ListContainer = styled.div`
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

const SortContainer = styled.div`
    display: flex;
    align-items: center;
    font-size: 0.7rem;
    margin-bottom: 3%;
    top: 90px;

    select{
        margin: 0 5px;
        border-radius: 5px;
        border: none;
        outline: none;
        background-color: #e5e5e5;
        font-size: 0.8rem;
        padding: 5px;
    }

    option{
        background-color: white;
    }

    button{
        background-color: #1565C0;
        border: none;
        outline: none;
        border-radius: 5px;
        padding: 6px 10px;
        color: white;
        font-size: 0.7rem;
        font-weight: bold;
    }

    @media(min-width: 900px){
        width: 95%;
    }

`

const MainContainer = styled.div`
    margin-top: 90px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export {
    MainContainer,
}