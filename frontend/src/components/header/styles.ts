import { styled } from "../../styles/";

export const HeaderContainer = styled('header', {
    padding: '2rem 0',
    width: '100%',
    maxWidth: 1180,
    margin: '0 auto',
    display: 'flex',
    flexDirection: "row",
    justifyContent: "space-between",
})


export const ShoppingCartContainer = styled('div', {
    display: 'flex',
    flexDirection: 'row',  
    
})

export const IconCartContainer = styled('button', {
    padding: 12,
    backgroundColor: '$gray800',
    borderWidth: 0,
    borderRadius: 6,
    color: "$white",
    cursor: "pointer",

    '&:hover':{
        backgroundColor: '$green500'
    },

})

export const ShoppingCartCountContainer = styled('div', {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$gray900', 
    width: 32,
    height: 32,
    borderRadius: '50%',
    marginLeft: -13,
    marginTop: -10
})

export const ShoppingCartCount = styled('div', {
    backgroundColor: '$green300',
    padding: 6,
    textAlign: 'center',
    lineHeight: 1,
    width: 25,
    height: 25,
    borderRadius: '50%',
})