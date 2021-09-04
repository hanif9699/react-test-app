import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { stat } from 'fs'

const Header = (props) => {
    return (
        <div>
            <Link to="/">Home</Link>
            <Link to="/cart">Cart</Link>
            <p>Rs. {props.totalAmount} For {props.totalQuantity}</p>
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
