import { styled } from "..";
import Image from "next/image";

export const ProductContainer = styled('main', {
    display: "flex",
    flexDirection: 'column',
    gridTemplateColumns: '1fr 1fr', 
    gap: '4rem',
    maxWidth: 1180,
    alignItems: "center",
    justifyContent: 'center',
    padding: 15,
    margin: '0 auto',

    '@sm': {
        display: 'grid',         
    }
})

export const ImageContainer = styled('div', {
    width: '100%',
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    padding: '0.25rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: 306,
    height: 396,
    margin: '0 auto',
    
    '@xs': {
        margin: 0,  
        maxWidth: 476,
        height: 536,
    },

    '@sm': {
        margin: 0,  
        maxWidth: 576,
        height: 656,
    },
    
    img:{
        objectFit: 'cover'
    }
})

export const ImageProduct = styled(Image, {
    width: 275,
    height: 280,

    '@xs': {
        width: 420,
        height: 380,
    },

    '@sm': {
        width: 520,
        height: 480,
    },
})

export const ProductDetails = styled('div', {
    display: "flex",
    flexDirection: 'column',

    h1:{
        fontSize: '$2xl',
        color: '$gray300'
    },

    span:{
        marginTop: '1rem',
        display: "block",
        fontSize: '$2xl',
        color: '$green300'
    },

    p:{
        marginTop: '2.5rem',
        fontSize: '$md',
        lineHeight: 1.6,
        color: '$gray300',
        marginBottom: 20,

        '@sm': {
            marginBottom: 0,
        },
    }, 
    
    button:{
        marginTop: 'auto',
        backgroundColor: '$green500',
        border: 8,
        color: '$white',
        borderRadius: 8,
        padding: '1.25rem',
        cursor: 'pointer',
        fontWeight: 'bold',
        fontSize: '$md',

        '&:hover':{
            backgroundColor: '$green300'
        },

        '&:disabled':{
            opacity: 0.6,
            cursor: 'not-allowed'
        },

        '&:not(:disabled):hover':{
            backgroundColor: '$green300'
        },
    }
})

