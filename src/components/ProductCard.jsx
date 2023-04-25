import { Card } from 'react-bootstrap'
import { ShopState } from '../context/Context'
import Rating from './Rating'
import { Link } from 'react-router-dom'
import AddToBasketBtn from './AddToBasketBtn'
import HeartBtn from './HeartBtn'

const ProductCard = ({ prod }) => {
    const {
        singleProductDispatch 
    } = ShopState()

    return (
        <Card className='w-50 m-2 d-flex flex-column product-card'>
            <HeartBtn prod={prod} style={{position: "absolute", top: "10px", right: "10px"}} />
            <Card.Img variant="top" src={prod.image} className='product-card-img mt-2'/>
            <Card.Body className='d-flex flex-column justify-content-between'>
                <div>
                <Link to="/product"
                    className='reset-link-style' 
                    onClick={() => {
                        singleProductDispatch({type: "SET_SINGLE_PRODUCT", payload: prod})
                    }}>
                    <Card.Title className='fs-6'>{prod.title}</Card.Title>
                </Link>
                <Card.Subtitle className='subtitle'>£{prod.price}</Card.Subtitle>
                <Rating rating={prod.rating} id={prod.id}/>
                </div> 
                <AddToBasketBtn prod={prod} />
            </Card.Body>
        </Card>
    )
}

export default ProductCard