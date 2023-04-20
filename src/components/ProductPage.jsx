import { Container, Col, Row, Image } from 'react-bootstrap'
import { ShopState } from '../context/Context'
import Rating from './Rating'
import AddToBasketBtn from './AddToBasketBtn'
import HeartBtn from './HeartBtn'
import { Link } from 'react-router-dom'
import { IoChevronBackOutline } from 'react-icons/io5'


const ProductPage = () => {
    const { singleProductState } = ShopState()

    return (
        <>
        <Link to="/" className='
            reset-link-style 
            d-flex 
            align-items-center
            ms-2
            mt-2
        '>
            <IoChevronBackOutline />
            Go back
        </Link>
        <Container className='justify-content-center py-5'>
            <Row className='justify-content-center'>
                <Col className='d-flex flex-row justify-content-center'>
                    <Image className='inline-block' src={singleProductState.image} style={{maxHeight: 200, margin: "0 auto"}}/>
                </Col>
            </Row>   

            <Row className='justify-content-center mt-3'>
                <Col md="10" lg="8">
                    <h1>{singleProductState.title}</h1>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col className='d-flex flex-row justify-content-between align-items-center' md="10" lg="8">
                    <h4 className='fw-normal'>£{singleProductState.price}</h4>
                    <HeartBtn prod={singleProductState}/>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col md="10" lg="8">
                    <Rating rating={singleProductState.rating} id={singleProductState.id}/>
                    <p>{singleProductState.description}</p>
                </Col>
            </Row>
            <Row className='justify-content-center'>
                <Col md="10" lg="8">
                    <AddToBasketBtn prod={singleProductState}/>
                </Col>
            </Row>
        </Container>
        </>
    )
}

export default ProductPage