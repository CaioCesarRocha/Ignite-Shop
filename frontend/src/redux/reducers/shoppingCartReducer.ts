import {createSlice} from '@reduxjs/toolkit';

export type Product = {
    id: string,
    name: string,
    imageUrl: string,
    url: string,
    price: string,
    description: string,
    defaultPriceId: string
}

export type ShoppingCartState = {
    count: number,
    shouldRender: boolean,
    listProducts: Product[]
}

export type ActionType = {
    payload: Product[],
    updateRender?: boolean
}

export type ActionTypeShouldRender = {
    payload: boolean
}

export const shoppingCartInitialState: ShoppingCartState = {
    count: 0, 
    shouldRender: false,
    listProducts: []
};


const Slice = createSlice({
    name: 'ShoppingCart',
    initialState: {
        count: 0, 
        shouldRender: false,
        listProducts: []
    } as ShoppingCartState,
    reducers:{
        addShoppingCart: (state: ShoppingCartState, action: ActionType) =>{
            const product = action.payload?.[0]

            let checkExistProduct = state.listProducts.filter(item => item.id !== product.id); // filtra a lista menos o produto

            if(checkExistProduct.length === state.listProducts.length){// se os array forem do msm tamanho, ou seja ainda nao existe aquele produto na lista
                const newState = {...state}

                newState.count = state.count+=1;     
                newState.listProducts.push(product)
                const stateJSON = JSON.stringify(newState)
    
                localStorage.setItem(
                  '@ignite-shop:shopping-cart-state-1.0.0',
                  stateJSON,
                )       
            }
        },
        removeShoppingCart: (state: ShoppingCartState, action: ActionType) =>{
            const newState = {...state}

            newState.count = state.count-=1;
        },
        updatingFromLocalStorageShoppingCart: (state: ShoppingCartState, action: ActionType) =>{
            const products = action.payload;

            const newState = {...state}
            newState.count = products.length     
            newState.listProducts = products

            return newState
        },
        shouldRender: (state: ShoppingCartState, action: ActionTypeShouldRender) =>{
            const newState = {...state}

            newState.shouldRender = action.payload

            return newState
        }
    }
})

export const {
    addShoppingCart,
    removeShoppingCart,
    updatingFromLocalStorageShoppingCart,
    shouldRender
} = Slice.actions

export default Slice.reducer;