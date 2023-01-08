import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { X } from 'phosphor-react';
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { shouldRender } from '../../redux/reducers/shoppingCartReducer';

import { 
    ShoppingCartContainer,
    Header,
    IconClose,
    Content,
    Footer,
} from "./styles"

type Product ={
    id: string,
    name: string,
    imageUrl: string,
    url: string,
    price: string,
    description: string,
    defaultPriceId: string
}


export default function ShoppingCart(){
    const [ isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
    const shoppingCart = useAppSelector(state => state.shoppingCart)
    const dispatchShoppingCart = useDispatch();

    function handleCloseShoppingCart(){

        dispatchShoppingCart(shouldRender(false))
    }

    function handleBuyProducts(products: Product[]){

    }

    return(
        <ShoppingCartContainer> 
            <Header>
                <IconClose onClick={handleCloseShoppingCart}>
                    <X size={34}/>
                </IconClose>     
                <h1>Sacola de Compras</h1>
            </Header>

            <Content>
            </Content>

            <Footer>
                <section>
                    <p> Quantidade </p>
                    <p> {shoppingCart.count} items </p>
                </section>

                <section>
                    <p> Valor Total </p>
                    <p> {shoppingCart.count} items </p>
                </section>
                <button 
                    disabled={isCreatingCheckoutSession} 
                    onClick={() => handleBuyProducts(shoppingCart.listProducts)}
                >
                    Finalizar Compra
                </button>
            </Footer>                               
        </ShoppingCartContainer>
    )
}