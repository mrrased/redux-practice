import { ADD_TO_CART, REMOVE_TO_CART } from '../Constant/Constant';

const innitialState = {
    cardData: []
}

export default function cartItems(state = [], action) {
    switch (action.type) {
        case ADD_TO_CART:
            // console.log('action' ,action)
            return [
                ...state,
                {cardData: action.data}
            ]
        case REMOVE_TO_CART:
            // console.log('action' ,action)
            state.pop()
            return [
                ...state,
                
            ]
            
        default:
            return state
    }
}