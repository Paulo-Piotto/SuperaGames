import styled from "styled-components";

export default function Checkout({ cart }){
    
    function getValue(){
        let value = 0;
        cart.forEach((item) => {
            value += item.price;
        })
        return value;
    }

    function getDiscount(){
        if(subtotal > 250){
            return shipping;
        }else{
            return 0;
        }
    }
    
    const subtotal = getValue();
    const shipping = cart.length * 10;
    const discount = getDiscount();
    const total =  subtotal + shipping - discount



    return(
        <CheckoutContainer>
            <p>Subtotal: R$ {subtotal.toFixed(2)}</p>
            <p>Frete: R$ {shipping.toFixed(2)}</p>
            <p>Descontos: R$ {discount.toFixed(2)}</p>
            <Total>Total: <span>R$ {total.toFixed(2)}</span></Total>
        </CheckoutContainer>
    );
}

const Total = styled.p`
    margin: 20px 0;
    font-size: 1.1rem;
    font-weight: bold;
    
    span{
        color: green;
    }
`
const CheckoutContainer = styled.div`
    font-size: 0.9rem;
    
    p{
        margin-bottom: 3px;
    }
`