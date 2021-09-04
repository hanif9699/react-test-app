import React from 'react'
import { connect } from 'react-redux'
import CartItem from './cartItem'
import { addToCart, removeFromCart, removeProductFromCart } from '../reducers/cartSlice'

const CartPage = (props) => {
    return (
        <div>
            Cart Page
            {props.cartItems.map((item, index) => <CartItem cartitem={item} key={index} addToCart={props.handleAddToCart} removeFromCart={props.handleRemoveFromCart} removeProduct={props.handleRemoveProductFromCart} />)}
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        cartItems: state.cart.cartItems
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleAddToCart: (product) => {
            dispatch(addToCart({ product, quantity: 1 }))
        },
        handleRemoveFromCart: (product) => {
            dispatch(removeFromCart({ product }))
        },
        handleRemoveProductFromCart: (product) => {
            dispatch(removeProductFromCart({product}))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
