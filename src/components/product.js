import React, { useState } from 'react'
import PropTypes from 'prop-types'
// import './index.css'
const quantityValue=[1,2,3,4,5,6,7,8,9]
const Product = (props) => {
    // console.log(props)
    const [quantity,setQuantity]=useState(1)
    const handleChange = (e)=>{
        setQuantity(e.target.value)
    }
    return (
        <div className="product">
            <div className="img-wrap">
                <img src={props.product.image} alt={props.product.title}></img>
            </div>
            <div className="title">
                <strong>{props.product.title}</strong>
            </div>
            <div className="description-wrap">
                <p>{props.product.description}</p>
            </div>
            <div className="description-wrap">
                <span>Quantity:</span>
                <select type="number" value={quantity} min="1" onChange={handleChange}>
                {quantityValue.map((value,index)=><option key={index} value={value}>{value}</option>)}
                </select>
            </div>
            <div className="add-to-cart-wrap">
                <button onClick={()=>{props.addToCart(props.product,quantity)}}>Add to Cart</button>
            </div>
        </div>
    )
}
Product.propTypes={
    product:PropTypes.object.isRequired
}
export default Product
