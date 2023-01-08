import { FileX } from "phosphor-react";
import { styled } from "../../styles/index";


export const ShoppingCartContainer = styled('main', {
    width: 430,
    height: '100vh',
    position: 'absolute',
    float: "right",
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    backgroundColor: "$gray800",
    padding: '5px 16px',
})


export const Header = styled('div', {
    display: 'flex',
    flexDirection: 'column'
})

export const IconClose = styled('div', {
    display: 'flex',
    justifyContent: 'flex-end',
    cursor: 'pointer',
    color: '$gray300',

    '&:hover':{
        color: '$gray100'
    },
})

export const Content = styled('div',{
   
})


export const Footer = styled('div',{
    width: '100%',
  
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    verticalAlign: 'bottom',
    

    section:{
        display: 'flex',
        padding: '10px 0px',
        justifyContent: 'space-around',
        alignItems: 'normal',

        p:{
            fontSize: '$lg',
        },
    },

    button:{     
        width: '85%',
        marginTop: 20,
        backgroundColor: '$green500',
        border: 8,
        color: '$white',
        borderRadius: 8,
        alignSelf: 'center',
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




