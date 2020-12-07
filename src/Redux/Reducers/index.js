import { combineReducers } from 'redux';
import bookReducer from '../Reducers/booksReducer';


export default combineReducers({
    books: bookReducer
})