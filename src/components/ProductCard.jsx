import { Card, Button } from 'react-bootstrap'
import { ShopState } from '../context/Context'


const ProductCard = ({ prod }) => {
    const {
        stock: {cart}, 
        shopStateDispatch 
    } = ShopState()
    return (
        <Card className='w-50 mb-2' style={{maxWidth: '48%'}} key={prod.id}>
            <Card.Img variant="top" src={prod.image} />
            <Card.Body>
                <Card.Title>{prod.title}</Card.Title>
                <Card.Subtitle>£{prod.price}</Card.Subtitle>
                <Card.Text>
                    {prod.description}
                </Card.Text>
                {
                    cart.some(p => p.id === prod.id) ? (
                        <Button
                        key={prod.id} 
                        variant='outline-secondary' 
                        className='rounded-pill'
                        active
                        onClick={() => (
                            shopStateDispatch({type: 'REMOVE_FROM_CART', payload: prod.id})
                        )}
                    >
                        Remove from Cart
                    </Button>    
                    ) : (
                        <Button
                        key={prod.id} 
                        variant='outline-secondary' 
                        className='rounded-pill'
                        onClick={() => (
                            shopStateDispatch({type: 'ADD_TO_CART', payload: prod})
                        )}
                    >
                        Add to Cart
                    </Button>     
                    )
                }   
            </Card.Body>
        </Card>
    )
}

export default ProductCard