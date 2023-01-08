import { useEffect, useState} from "react";
import { Header } from "../components/header";
import ShoppingCart from "../components/ShoppingCart";
import { useAppSelector } from "../redux/hooks/useAppSelector";


export function GlobalContentApp(){
  const [ renderShopping, setRenderShoppingCart] = useState(false)
  const shoppingCart = useAppSelector(state => state.shoppingCart);

  useEffect(() =>{
    setRenderShoppingCart(shoppingCart.shouldRender)
  },[shoppingCart])

  return(
    <>
      <Header/>
      { renderShopping ? <ShoppingCart/> : null}
    </>
  )
}