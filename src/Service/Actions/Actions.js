import { ADD_TO_CART, REMOVE_TO_CART } from '../Constant/Constant';


export const addToCart = ( data ) =>{
    // console.log('data', data);
    return{
        type: ADD_TO_CART,
        data:data
    }
}
export const removeToCart = ( ) =>{
    console.log('action working')
    return{
        type: REMOVE_TO_CART,
    }
}