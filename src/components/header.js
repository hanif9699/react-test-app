import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { stat } from 'fs'
const Header = (props) => {
    return (
        <div className="header-wrapper">
            <div className="header-menu">
            <span className="nav-link"><Link to="/">Home</Link></span>
            <span className="nav-link"><Link to="/cart">Go to Cart</Link></span>
            </div>
            <div className="cart">
            <p>Total Price: {props.totalAmount} Products in Cart: {props.totalQuantity}</p>
            </div>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        totalAmount: state.cart.totalAmount,
        totalQuantity:state.cart.totalQuantity
    }
}

export default connect(mapStateToProps)(Header)
