import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { stripe } from "../../lib/stripe";
import Stripe from "stripe";
import axios from "axios";

import { 
  ImageContainer, 
  ImageProduct, 
  ProductContainer, 
  ProductDetails 
} from "../../styles/pages/product";

import { addShoppingCart, removeShoppingCart} from '../../redux/reducers/shoppingCartReducer';


type Product ={
    id: string,
    name: string,
    imageUrl: string,
    url: string,
    price: string,
    description: string,
    defaultPriceId: string
}

interface ProductProps{
  product: Product
}

export default function Product({product}: ProductProps) {
  const [ isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false);
  const dispatchShoppingCart = useDispatch();
  const {isFallback} = useRouter();

  if(isFallback){
    return <p> Loading...</p>
  }

  async function handleAddProductChart(product: Product){
    const newProduct = [product]
    try{
      dispatchShoppingCart(addShoppingCart(newProduct))
      alert(`Produto ${product.name} adicionado ao carrinho!`)
    }catch(err){
      alert(`${err}`)
    }
    
    /*try{
      setIsCreatingCheckoutSession(true);
      const response = await axios.post('/api/checkout',{
        priceId: product.defaultPriceId
      })
      const { checkoutUrl}= response.data;
      window.location.href = checkoutUrl; //redirecionando usuário para uma rota externa
    }catch(error){
      setIsCreatingCheckoutSession(false);
      //o ideal seria conectar com alguam ferramenta pra checar o erro (ex: Datadog, Sentry)
      alert('Falha ao redirecionar ao checkout')
    }*/
  }

  return (
    <>
      <Head>
          <title>{product.name}| Ignite Shop</title>
      </Head>  
      <ProductContainer>
        <ImageContainer>
          <ImageProduct src={product.imageUrl} width={520} height={480} alt=""/>
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{product.price}</span>
          <p>{product.description}</p>
          <button disabled={isCreatingCheckoutSession} onClick={() => handleAddProductChart(product)}>
            Adicionar ao carrinho
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}
  

export const getStaticPaths: GetStaticPaths = async() =>{
  return{
    paths:[
      { params: { id: "prod_MyxuFTM9nwDQ6p"}} //pode passar somente os mais acessados
    ],
    fallback: true // tentar acessar a page de um produto que nao passou no params executando GetStaticProps
  }
}

export const getStaticProps: GetStaticProps<any, { id: string}> = async({params}) =>{
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: [ 'default_price']
  });

  const price = product.default_price as Stripe.Price
  return{
    props: {
      product:{
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        url: product.url,
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        }).format(price.unit_amount! / 100),
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1 // -> 1 horas
  }
}
  