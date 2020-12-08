import ACTIONTYPE from '../Constants';

const initialState = {}


export default (state = initialState, action) => {
    switch (action.type) {
        case ACTIONTYPE.BOOKS_DATA:
            return {
                ...state,
                ...action.payload.reduce((acc, cur) => {
                    acc[cur.id] = cur
                    return acc;
                }, {})
            }
        default: return state;
    }
}