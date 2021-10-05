import styled from "styled-components";
import { IoTrashOutline } from "react-icons/io5"
import { useContext } from "react";
import CartContext from "../contexts/cartContext";

export default function CartItem({item}){
    const { cart, setCart } = useContext(CartContext);

    function removeItem(){
        setCart(cart.filter((el) => 
            el.id === item.id ? false : true
        ))
    }

    return(
        <ItemContainer>
            <p>
                {item.name} 
                <IoTrashOutline onClick={removeItem}/> 
            </p>
            <p>x1 <span>valor: {item.price}</span> </p>
        </ItemContainer>
    );
}

const ItemContainer =  styled.div`
    margin-bottom: 10%;

    p{
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }
`

