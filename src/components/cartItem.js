import styled from "styled-components";
import { IoTrashOutline } from "react-icons/io5"
import { useContext } from "react";
import { useHistory } from "react-router";
import CartContext from "../contexts/cartContext";

export default function CartItem({item}){
    const { cart, setCart } = useContext(CartContext);
    const history = useHistory();

    function removeItem(){
        if(window.confirm('quer mesmo deletar esse item?')){
            setCart(cart.filter((el) => 
            el.id === item.id ? false : true
            ))
            history.push('/deleted');
        }
    }

    return(
        <ItemContainer>
            <section>
            <div>
                <img src={item.image} alt=''/>
            </div>
            <div>
                <p>{item.name}</p>
                <Quantity>x1</Quantity>
            </div>
            </section>
            <Value>
                <Trash onClick={removeItem} />
                <p>R$ {item.price.toFixed(2)} </p>
            </Value>
        </ItemContainer>
    );
}

const ItemContainer =  styled.div`
    margin-bottom: 10%;
    border-bottom: 1px solid #c5c5c5;
    display: flex;
    justify-content: space-between;

    img{
        width: 50px;
    }

    div{
        display: flex;
        flex-direction: column;
        margin: 0 10px 10px 0
    }

    section{
        display: flex;
    }

    p{
        max-width: 13ch;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-bottom: 5px;

        @media(min-width: 900px){
            max-width: 22ch;
        }
    }
`

const Value = styled.div`
    align-items: flex-end;

    p{
        color: green;
        font-size: 0.9rem;
    }
`
const Trash = styled(IoTrashOutline)`
    margin-bottom: 5px;

    &:hover{
        color: red;
    }
`

const Quantity = styled.p`
    font-size: 0.8rem;
    color: gray;
`