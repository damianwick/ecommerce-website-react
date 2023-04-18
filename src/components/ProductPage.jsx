import { Container, Col, Row, Image } from 'react-bootstrap'
import { ShopState } from '../context/Context'
import Rating from './Rating'
import AddToBasketBtn from './AddToBasketBtn'
import HeartBtn from './HeartBtn'
import { Link } from 'react-router-dom'


const ProductPage = () => {
    const { singleProductState } = ShopState()

    return (
        <>
        <Link to="/">Go back</Link>
        <Container className='justify-content-center'>            
            <Image src={singleProductState.image} fluid style={{maxHeight: 200, margin: "0 auto"}}/>
            <Row>
                <Col>
                    <HeartBtn prod={singleProductState} /> 
                    <h1>{singleProductState.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h4>{singleProductState.price}</h4>
                    <Rating rating={singleProductState.rating} id={singleProductState.id}/>
                    <p>{singleProductState.description}</p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddToBasketBtn prod={singleProductState}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default ProductPage