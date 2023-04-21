import { Button } from "react-bootstrap"
import { ShopState } from "../context/Context"

const AddToBasketBtn = ({prod, style}) => {
    const { 
        stock: {basket}, 
        shopStateDispatch 
    } = ShopState()

    return (
        <>
            {
                basket.some(p => p.id === prod.id) ? (
                    <Button
                    key={prod.id} 
                    variant='light' 
                    className='
                        rounded-pill
                        p-2
                        mt-2
                    '
                    active
                    onClick={() => (
                        shopStateDispatch({type: 'REMOVE_FROM_BASKET', payload: prod.id})
                    )}
                >
                    Remove from Basket
                </Button>    
                ) : (
                    <Button
                    key={prod.id} 
                    variant='dark' 
                    className='
                        rounded-pill
                        mt-2'
                    onClick={() => (
                        shopStateDispatch({type: 'ADD_TO_BASKET', payload: prod})
                    )}
                >
                    Add to Basket
                </Button>     
                )
            }
        </>
    )
}

export default AddToBasketBtn