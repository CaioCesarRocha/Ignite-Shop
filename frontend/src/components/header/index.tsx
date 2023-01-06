import Link from 'next/link';
import Image from 'next/image';
import { Handbag} from 'phosphor-react';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import logoImg from '../../assets/logo.svg';
import { 
    HeaderContainer, 
    ShoppingCartContainer,
    IconCartContainer, 
    ShoppingCartCount, 
    ShoppingCartCountContainer
} from './styles';
import { useAppSelector } from '../../redux/hooks/useAppSelector';
import { updatingFromLocalStorageShoppingCart } from '../../redux/reducers/shoppingCartReducer';


export function Header(){
    const [numberProducts, setNumberProducts] = useState(0)
    const dispatchShoppingCart = useDispatch();
    const shoppingCart = useAppSelector(state => state.shoppingCart)

    useEffect(() =>{
        console.log('PASSEI NO HEADER')
        if(typeof window !== 'undefined') {
            const storedStateJSON = localStorage.getItem(
            '@ignite-shop:shopping-cart-state-1.0.0',
          )
                
          if (storedStateJSON) {
            const products = JSON.parse(storedStateJSON)
            dispatchShoppingCart(updatingFromLocalStorageShoppingCart(products.listProducts))
          }
        }
    },[])

    useEffect(() =>{
        console.log('shjpppinfgi carit', shoppingCart)
        setNumberProducts(shoppingCart.count)
    }, [shoppingCart.count])

    return(
        <HeaderContainer>
          <Link href={'http://localhost:3000/'}>
            <Image src={logoImg} alt=""/>
          </Link>
          <ShoppingCartContainer>
                <IconCartContainer>
                    <Handbag size={48}/>
                </IconCartContainer>
                <ShoppingCartCountContainer>       
                    <ShoppingCartCount>
                        {numberProducts}
                    </ShoppingCartCount>
                </ShoppingCartCountContainer> 
          </ShoppingCartContainer>
        </HeaderContainer>
    )
}