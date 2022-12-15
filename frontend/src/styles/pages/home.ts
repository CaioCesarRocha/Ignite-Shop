import { styled } from "..";

export const HomeContainer = styled('main',{
    display: 'flex',
    width: '100%',
    maxWidth: 'calc(100vw  - ((100vw - 1180px)/2))',
    marginLeft: 'auto',
    padding: '0 1rem 2rem 1rem',
    minHeight: 600
})

export const Product = styled('a', {
    display: "flex",
    background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    cursor: 'pointer',
    overflow: 'hidden',

    img:{
        objectFit: 'cover', //faz a imagem caber no container sem distorcer
    },

    footer:{
        position: 'absolute',
        bottom: '0.25rem',
        left: '0.25rem',
        right: '0.25rem',
        padding: '2rem',
        borderRadius: 6,
        display: 'flex',
        alignItems: "center",
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',

        transform: 'translateY(110%)', // faz o footer sumir da tela
        opacity: 0,
        transition: 'all 0.2s ease-in-out',

        strong:{
            fontSize: '$lg'
        },

        span:{
            fontSize: '$xl',
            fontWeight: 'bold',
            color: '$green300'
        }
    },

    '&:hover':{
        footer:{
            transform: 'translateY(0%)', // faz o footer aparecer na tela qdo passar o mouse
            opacity: 1
        }
    }
})