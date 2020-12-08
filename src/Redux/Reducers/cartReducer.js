import ACTIONTYPE from '../Constants'

const innitialState = {

}

export default (state = innitialState, action) => {
    switch (action.type) {
        case ACTIONTYPE.ADD_TO_CART:
            const newstate = { ...state }
            if (action.payload in state) {
                newstate[action.payload]++
            }
            else {
                newstate[action.payload] = 1
            }
            return newstate
        default: return state
    }
}