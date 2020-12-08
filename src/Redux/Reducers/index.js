import { combineReducers } from 'redux';
import bookReducer from '../Reducers/booksReducer';
import cartReducer from '../Reducers/cartReducer';

export default combineReducers({
    books: bookReducer,
    cart: cartReducer
})