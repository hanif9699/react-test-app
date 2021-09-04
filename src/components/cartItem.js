import React from 'react'

const CartItem = (props) => {
    return (
        <div className="cartitem-page">
            <div className="cart-image">
                <img src={props.cartitem.image} alt={props.cartitem.title}/>
            </div>
            <div className="cart-detail-wrapper">
            <strong>{props.cartitem.title}</strong>
            <p>Unit Price: <span>{props.cartitem.price}</span></p>
            <div className="cartiem-quantity-container">
                Quantity:
                <input type="number" value={props.cartitem.quantity} readOnly />
                <button type="button" className="add-to-cart-button" onClick={()=>{props.addToCart(props.cartitem)}}>+</button>
                <button type="button" className="remove-from-cart-button" onClick={()=>{props.removeFromCart(props.cartitem)}}>-</button>
            </div>
            <p>Amount: <span>{props.cartitem.amount}</span></p>
            <button type="button" className="remove-product-cart" onClick={()=>{props.removeProduct(props.cartitem)}}>Remove Item</button>
            </div>
        </div>
    )
}

export default CartItem
