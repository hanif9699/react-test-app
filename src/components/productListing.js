import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Product from './product'
import { addToCart } from '../reducers/cartSlice'
// import './index.css'
const list_limit = 6
const ProductListing = (props) => {
    // const dispatch=useDispatch()
    const [showProduct, setShowProduct] = useState([])
    const [page, setPage] = useState(1)
    const [showButton, setShowButton] = useState(true);
    const [index, setIndex] = useState(list_limit)

    useEffect(() => {
        setShowProduct(props.products.slice(0, list_limit))
    }, [props.products])

    const handleLoadMore = () => {
        const newPage = page + 1,
            newShow = props.products.length > (list_limit * newPage)
        setPage(newPage)
        setShowButton(newShow)
        setShowProduct(prevState => [...prevState, ...props.products.slice(index, newPage * list_limit)])
        setIndex(newPage * list_limit)
    }
    return (
        <div className="product-wrapper">
            {props.loading ? 'Loading the product ...'
            : 
            (props.error? props.error: '')}
            {showProduct.map((product) => <Product key={product.id} product={product} addToCart={props.handleAddToCart} />)}
            {showProduct.length > 0 && showButton ? <button onClick={handleLoadMore}>Load More</button> : ''}
        </div>
    )
}
ProductListing.propTypes = {
    products: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired,
}
const mapStateToProps = (state) => {
    return {
        loading: state.product.isFetching,
        products: state.product.products,
        error:state.product.errorMessage
    };
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleAddToCart: (product,quantity) => {
            dispatch(addToCart({product,quantity}))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProductListing)
