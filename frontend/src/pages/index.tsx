import { GetServerSideProps, GetStaticProps } from "next";
import Image from "next/image";

import "keen-slider/keen-slider.min.css";
import { stripe } from "../lib/stripe";
import Stripe from 'stripe';

import { HomeContainer, Product } from "../styles/pages/home";
import shirt1 from '../assets/camisetas/Shirt.png';
import { useKeenSlider }from 'keen-slider/react';


interface HomeProps{
  products:{
    id: string,
    name: string,
    imageUrl: string,
    url: string,
    price: number
  }[]
}

export default function Home({products}: HomeProps) {

  const [sliderRef] = useKeenSlider({ //da acesso pro keenSlider modificar diretamente a div q recebe ref
    slides:{
      perView: 3,
      spacing: 48
    }
  });

  return (   
    <HomeContainer ref={sliderRef} className="keen-slider">
      {products.map(product =>(
        <Product key={product.id} className="keen-slider__slide">
          <Image src={product.imageUrl} width={520} height={480} alt=""/>
          <footer>
            <strong>{product.name}</strong>
            <span>{product.price}</span>
          </footer>
        </Product>
      ))
      }
      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt=""/>
        <footer>
          <strong>Camiseta</strong>
          <span>R$ 84,50</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt=""/>
        <footer>
          <strong>Camiseta</strong>
          <span>R$ 84,50</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt=""/>
        <footer>
          <strong>Camiseta</strong>
          <span>R$ 84,50</span>
        </footer>
      </Product>
      <Product className="keen-slider__slide">
        <Image src={shirt1} width={520} height={480} alt=""/>
        <footer>
          <strong>Camiseta</strong>
          <span>R$ 84,50</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}

export const getStaticProps: GetStaticProps = async() =>{

  const response = await stripe.products.list({
    expand: [ 'data.default_price']
  });
  const products  = response.data.map(product =>{
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      url: product.url,
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100)
    }
  })
  return{
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // -> 2 horas
  }
}

/*export const getServerSideProps: GetServerSideProps = async() =>{

  const response = await stripe.products.list({
    expand: [ 'data.default_price']
  });
  const products  = response.data.map(product =>{
    const price = product.default_price as Stripe.Price
    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      url: product.url,
      price: price.unit_amount,
    }
  })
  return{
    props: {
      products
    }
  }
}*/
