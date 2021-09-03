import product from './productSlice';
import { combineReducers } from 'redux';
import cart from './cartSlice'

export default combineReducers({
    product,
    cart
})