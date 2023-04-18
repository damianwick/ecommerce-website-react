import { Card } from 'react-bootstrap'
import { ShopState } from '../context/Context'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import AddToBasketBtn from './AddToBasketBtn'
import HeartBtn from './HeartBtn'


const ProductCard = ({ prod }) => {
    const {
        singleProductDispatch,
        singleProductState 
    } = ShopState()

    return (
        <Card className='w-50 mb-2 d-flex flex-column' style={{maxWidth: '48%'}} key={prod.id}>
            <HeartBtn prod={prod}/>
            <Card.Img variant="top" src={prod.image} className='product-card-img mt-2'/>
            <Card.Body>
            <Link to="/product" onClick={() => {
                singleProductDispatch({type: "SET_SINGLE_PRODUCT", payload: prod})
                console.log(singleProductState);
                }}>
                <Card.Title>{prod.title}</Card.Title>
            </Link>
                <Card.Subtitle>£{prod.price}</Card.Subtitle>
                <Rating rating={prod.rating} id={prod.id}/>
                <AddToBasketBtn prod={prod}/>
            </Card.Body>
        </Card>
    )
}

export default ProductCard