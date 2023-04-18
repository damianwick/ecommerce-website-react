import { Button } from "react-bootstrap"
import { ShopState } from "../context/Context"

const AddToBasketBtn = ({prod}) => {
    const { 
        stock: {cart}, 
        shopStateDispatch 
    } = ShopState()

    return (
        <div className='block mt-3'>
        {
            cart.some(p => p.id === prod.id) ? (
                <Button
                key={prod.id} 
                variant='outline-secondary' 
                className='
                    rounded-pill'
                active
                onClick={() => (
                    shopStateDispatch({type: 'REMOVE_FROM_CART', payload: prod.id})
                )}
            >
                Remove from basket
            </Button>    
            ) : (
                <Button
                key={prod.id} 
                variant='outline-secondary' 
                className='
                    rounded-pill'
                onClick={() => (
                    shopStateDispatch({type: 'ADD_TO_CART', payload: prod})
                )}
            >
                Add to basket
            </Button>     
            )
        }
        </div>
    )
}

export default AddToBasketBtn