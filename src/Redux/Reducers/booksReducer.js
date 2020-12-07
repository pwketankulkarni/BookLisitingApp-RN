import ACTIONTYPE from '../Constants';

const initialState = []


export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIONTYPE.BOOKS_DATA:
            return [...state, ...action.payload]
        default: return state;
    }
}