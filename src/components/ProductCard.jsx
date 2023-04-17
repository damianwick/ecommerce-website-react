import { Card, Button } from 'react-bootstrap'
import { ShopState } from '../context/Context'
import Rating from './Rating'
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai'
import { useEffect } from 'react'


const ProductCard = ({ prod }) => {
    const {
        stock: {cart, products, saved},
        shopStateDispatch 
    } = ShopState()

    return (
        <Card className='w-50 mb-2 d-flex flex-column' style={{maxWidth: '48%'}} key={prod.id}>
            {saved.some(p => p.id === prod.id) ? (
                <span   
                className='
                    position-absolute
                    btn 
                    rounded-pill 
                    btn-light 
                    d-flex 
                    justify-content-center 
                    align-items-center
                    fs-4' 
                style={
                    {top: "10px", right: "10px", height: 40, width: 40}
                }
                onClick={() => {
                    shopStateDispatch({type: 'REMOVE_FROM_SAVED', payload: prod.id})
                }}
                >
                    {saved.some((p) => p.id === prod.id) ? (
                        <AiFillHeart />
                    ) : (
                        <AiOutlineHeart />
                    )}   
            </span>
            ) : (
                <span   
                className='
                    position-absolute
                    btn 
                    rounded-pill 
                    btn-light 
                    d-flex 
                    justify-content-center 
                    align-items-center
                    fs-4' 
                style={
                    {top: "10px", right: "10px", height: 40, width: 40}
                }
                onClick={() => {
                    shopStateDispatch({type: 'ADD_TO_SAVED', payload: prod})
                }}
                >
                    {saved.some((p) => p.id === prod.id) ? (
                        <AiFillHeart />
                    ) : (
                        <AiOutlineHeart />
                    )}
                    
            </span>
            )}
            
            <Card.Img variant="top" src={prod.image} className='product-card-img mt-2'/>
            <Card.Body>
                <Card.Title>{prod.title}</Card.Title>
                <Card.Subtitle>£{prod.price}</Card.Subtitle>
                <Rating rating={prod.rating} id={prod.id}/>
                <div className='block mt-3'>
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
                </div>
                   
            </Card.Body>
        </Card>
    )
}

export default ProductCard