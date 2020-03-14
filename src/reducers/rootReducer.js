import Image1 from '../assets/shoe1.jpg'
import Image2 from '../assets/shoe2.jpg'
import Image3 from '../assets/shoe3.jpg'
import Image4 from '../assets/shoe4.jpg'
import Image5 from '../assets/shoe5.jpg'
import Image6 from '../assets/shoe6.jpg'

const initState =  {
    data : [
        {id:'1', name : 'Reebok', desc : 'nice shoes',image : Image1},
        {id:'2', name : 'Addidas' , desc : 'light weight',image : Image2},
        {id:'3', name : 'Puma' , desc : 'best for football',image : Image3},
        {id:'4',name : 'Bata' , desc : 'Best in class',image : Image4},
        {id:'5', name : 'Spark' , desc : 'Best for school kids',image : Image5},
        {id:'6', name : 'Paragon' , desc : 'Best for uncles',image : Image6}
    ],  
    cart : [
    ]
}

const rootReducer  = (state = initState, action) => {

    if(action.type === 'ADD_TO_CART')
    {
        if((state.cart.find(data => action.id === data.id))==null)
        {
            let newCart = state.data.filter(dat => {
                return action.id===dat.id
            }
            )[0];
            newCart.i = '1';
            return {
                ...state,
                cart : [...state.cart,newCart],
            }
        }
    }

    if(action.type === 'REMOVE_FROM_CART')
    {
        let newCart = state.cart.filter(data => action.id !== data.id)
        return{
            ...state,
            cart : newCart
        }
    }

    return state;
}

export default rootReducer; 