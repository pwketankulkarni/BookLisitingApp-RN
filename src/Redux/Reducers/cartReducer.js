import ACTIONTYPE from '../Constants'

const innitialState = {
    data: {},
    count: 0
}

export default (state = innitialState, action) => {
    switch (action.type) {
        case ACTIONTYPE.ADD_TO_CART: {
            const newstate = { ...state, count: state.count + 1 }
            if (action.payload in state) {
                newstate.data[action.payload]++
            }
            else {
                newstate.data[action.payload] = 1
            }
            return newstate
        }

        case ACTIONTYPE.REMOVE_FROM_CART: {
            const newstate = { ...state, count: state.count - 1 }
            delete newstate.data[action.payload]
            return newstate
        }
        default: return state
    }
}