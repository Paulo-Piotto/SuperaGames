import styled from "styled-components";
import data from '../products.json'; 

export default function GamesList(){
    const products = data;

    return(
        <ListContainer>
        </ListContainer>
    );
}

const ListContainer = styled.div`
    margin-top: 90px;
`