import {Container, Row, Col, Form, Card, Button} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {IoChevronBackOutline } from 'react-icons/io5'
import { ShopState } from '../context/Context'
import { ImBin } from 'react-icons/im'
import { useEffect, useState } from 'react'

const Checkout = () => {
    const {stock: { basket }, shopStateDispatch} = ShopState()
    const [width, setWidth] = useState()
    const [deliveryPrice, setDeliveryPrice] = useState(2.99)
    const [itemsPrice, setItemsTotal] = useState()
    const [validated, setValidated] = useState(false)
    
    const handleSubmit = (e) => {
        const form = e.currentTarget
        if (form.checkValidity() === false) {
            e.preventDefault()
            e.stopPropagation()
        }
        setValidated(true)
    }

    useEffect(() => {
        window.addEventListener('resize', () => setWidth(window.innerWidth))
        console.log(width);

    }, [])

    const deliveryPrices = {
        standard: 2.99, 
        free: 0.00,
        nextDay: 5.99
    }

    useEffect(() => setItemsTotal(basket.reduce((acc, curr) => {
       acc = acc + curr.price
       return Math.round(acc * 100) / 100
    }, 0)),[])

    return <>
        <Link to="/" className='
            reset-link-style 
            d-flex 
            align-items-center
            ms-2
            mt-2
        '>
            <IoChevronBackOutline />
            Main Page
        </Link>
        
        <Container fluid='sm' className='mb-5 mt-3'>
            <h1>Checkout</h1>
            <hr className='underline-section-title'/>
            <Row>
                
                <Form noValidate validated={validated} onSubmit={handleSubmit} className='d-md-flex justify-content-around'>
                <Col md={6} xxl={5}>
                    <Form.Text
                        className='fs-3'
                        >Delivery address</Form.Text>
                    <Form.Group as={Col}>
                        <Form.Label>Full name</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            aria-Label='Full name'
                        />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Phone number</Form.Label>
                        <Form.Control
                            required        
                            type='tel'
                            aria-Label='Phone number' 
                        />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            required        
                            type='email'
                            aria-Label='Phone number' 
                        />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    
                    <Form.Group>
                        <Form.Label>Postcode</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            aria-Label='Postcode' 
                        />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address line 1 (or Company Name)</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            ario-Label='Address line 2 (or Company Name)' 
                        />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Address line 2 (optional)</Form.Label>
                        <Form.Control
                            type='text' 
                            aria-Label='Address line 1 (optional)'
                        />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Town/City</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            aria-Label='Town or City' 
                        />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>County (if applicable)</Form.Label>
                        <Form.Control
                            type='text'
                            aria-Label='County (if applicable)' 
                        />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Delivery instructions (optional)</Form.Label>
                        <Form.Control 
                            as="textarea"
                            aria-Label='Delivery instructions'
                            style={{maxHeight: 150}}
                            />
                    </Form.Group>
                    <hr className='w-75 mx-auto my-4'/>

                    <Form.Text className='fs-3'>Payment details</Form.Text>

                    <Form.Group>
                        <Form.Label>Debit/credit card</Form.Label>
                        <Form.Control
                            required
                            type='tel'
                            pattern="[0-9\s]{13,19}"
                            placeholder='xxxx xxxx xxxx xxxx'
                            aria-Label='Debit/credit card' 
                        />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Name on the card</Form.Label>
                        <Form.Control
                            required
                            type='text'
                            placeholder='John Smith'
                            aria-Label='Name on the card' 
                        />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </Form.Group>
                    <Row>
                        <Form.Group as={Col}>
                            <Form.Label>Expiry date</Form.Label>
                            <Form.Control
                                required
                                type='text'
                                placeholder='mm / dd'
                                aria-Label='Expiry date' 
                            />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label>CVV</Form.Label>
                            <Form.Control
                                required
                                type='text'
                                placeholder='xxx'
                                aria-Label='CVV' 
                            />
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                        </Form.Group>
                    </Row>
                
                    <hr className='w-75 mx-auto my-4'/>

                    <Form.Text className='fs-3'>Delivery options</Form.Text>
                    <Form.Check 
                        type='radio'
                        checked={deliveryPrice === 2.99}
                        label='£2.99 Standard Delivery: 2 -3 business days'
                        name='delivery-option'
                        id="standard-delivery"
                        onChange={(e) => setDeliveryPrice(deliveryPrices.standard)}
                        />
                    <Form.Check 
                        type='radio'
                        label='Free Environmentally Friendly Delivery: 5 - 7 business days'
                        name='delivery-option'
                        id="free-delivery"
                        onChange={(e) => setDeliveryPrice(deliveryPrices.free)}
                        />
                    <Form.Check 
                        type='radio'
                        label='£5.99 Next Day Delivery'
                        name='delivery-option'
                        id="next-day-delivery"
                        onChange={(e) => setDeliveryPrice(deliveryPrices.nextDay)}
                        />
                    {width < 768 ? (
                        <hr className='w-75 mx-auto my-4'/>
                    ) : ('')}   
                    
                    </Col>
                    <Col md={5} lg={4} className='d-flex flex-column'>
                    <>
                    {basket.map(p => (
                            <div className="d-flex justify-content-between align-items-center mb-1 p-1" style={{backgroundColor: "#f2f2f2"}}>
                                <img src={p.image} style={{width: "50px", height: "50px", objectFit: "contain"}}/>
                                <div className="mx-2 my-1 w-75" style={{ }}>
                                    <h6>{p.title}</h6>
                                    <span>£{p.price}</span>
                                </div>
                                <span
                                    className="removeIcon"  
                                    onClick={() => {
                                            shopStateDispatch(
                                                {
                                                type: "REMOVE_FROM_BASKET", 
                                                payload: p.id
                                                }
                                            )
                                    }} >
                                    <ImBin />
                                </span>
                            </div>
                        ))}
                    </>
                        <hr className='w-75 mx-auto my-4'/>
                    <Row>
                        <Col>
                            <span>Items:</span> 
                        </Col>
                        <Col className="justify-content-end d-flex">
                            <span className="">£{itemsPrice} </span>
                        </Col>
                    </Row>
                    <Row className="mb-4">
                        <Col>
                            <span>Postage & Packing:</span> 
                        </Col>
                        <Col className="justify-content-end d-flex">
                            <span className="">£{deliveryPrice} </span>
                        </Col>
                    </Row>
                    <Row className="mb-4 fs-2">
                        <Col>
                            <span>Total:</span> 
                        </Col>
                        <Col className="justify-content-end d-flex">
                            <span className="">£{itemsPrice + deliveryPrice}</span>
                        </Col>
                    </Row>
                    <Button 
                        type="submit"
                        className='
                            btn-dark
                            mt-3
                            rounded-pill
                            align-self-canter
                            '
                    >Buy now</Button>
                    </Col>
                </Form>  
            </Row>
        </Container>
    </>
    
}

export default Checkout