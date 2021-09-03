import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0
}
const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            const { product, quantity } = action.payload
            const prodId = product.id,
                prodPrice = product.price,
                prodTitle=product.title,
                prodImage = product.image;
            const existItem = state.cartItems.find(x => x.id === product.id)
            let newCartItem,cartItems,totalAmount,totalQuantity;
            if (existItem) {
                newCartItem={
                    ...existItem,
                    quantity:parseInt(existItem.quantity,10)+parseInt(quantity,10),
                    amount:existItem.amount+prodPrice*quantity
                }
                cartItems=state.cartItems.map(x => x.id === newCartItem.id ? newCartItem : x)
            } else {
                newCartItem = {
                    id: prodId,
                    unitPrice: prodPrice,
                    quantity: parseInt(quantity,10),
                    image: prodImage,
                    title:prodTitle,
                    amount:prodPrice*quantity
                }
                cartItems=[...state.cartItems,newCartItem]
            }
            totalAmount=state.totalAmount+(prodPrice*quantity)
            totalQuantity=parseInt(state.totalQuantity,10)+parseInt(quantity,10) 
            return Object.assign({},state,{
                cartItems,
                totalAmount,
                totalQuantity
            })
        },
        removeFromCart: (state, action) => {
            const { product } = action.payload
            const itemToRemove = state.cartItems.find(x => x.id === product.id)
            if(!itemToRemove){
                return state
            }
            let cartItems,totalAmount,totalQuantity;
            if(itemToRemove.quantity>1){
                let updateCartItem={
                    ...itemToRemove,
                    quantity:itemToRemove.quantity-1,
                    amount:itemToRemove.amount-itemToRemove.unitPrice
                }
                cartItems=state.cartItems.map(x => x.id === updateCartItem.id ? updateCartItem : x) 
            }else{
                cartItems=state.cartItems.filter(x=>x.id !== itemToRemove.id)
            }
            totalAmount=parseInt(totalAmount,10)-itemToRemove.unitPrice;
            totalQuantity=parseInt(totalQuantity,10)-1
            return Object.assign({},state,{
                cartItems,
                totalAmount,
                totalQuantity
            })
        }
    }
})
export const { addToCart, removeFromCart } = cartSlice.actions
export default cartSlice.reducer