import { Button, Offcanvas, Container, Row, Col } from "react-bootstrap"
import { BsCart } from "react-icons/bs"
import { useEffect, useState } from "react"
import { ShopState } from "../context/Context"
import { ImBin } from "react-icons/im"
import { Link } from "react-router-dom"
const Basket = () => {
    const { 
        stock: { basket },
        shopStateDispatch 
    } = ShopState()

    const [showCart, setShowCart] = useState(false)

    
    const [cartTotal, setCartTotal] = useState(0)

    useEffect(() => {
        setCartTotal(basket.reduce((acc, val) => {
            acc = acc + val.price
            return Math.round(acc * 100) /100
        }, 0))
    })
        
    
    
    const handleShowCart = () => setShowCart(!showCart)

    return (
        <>
        <Button className='ms-2 btn fs-4' variant="secondary" size="sm" onClick={handleShowCart}>
            <BsCart /> 
            <span className="fs-6 ms-1">{basket.length}</span>
        </Button>
        <Offcanvas show={showCart} onHide={handleShowCart} placement="end">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Basket</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                {basket.length ? (
                    <Container className="">                    
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

                    <hr />
                    <Row className="mb-4 fs-2">
                        <Col>
                            <span>Total:</span> 
                        </Col>
                        <Col className="justify-content-end d-flex">
                            <span className="">£{cartTotal} </span>
                        </Col>
                    </Row>
                    
                    <Row className="justify-content-center">
                        <Link to='/checkout' className="w-75">
                            <Button variant="dark" className="rounded-pill w-100" onClick={handleShowCart}>Checkout</Button>
                        </Link>
                    </Row>
                    </Container>
                ) : (
                    <span>Basket is empty</span>
                )}

            </Offcanvas.Body>
        </Offcanvas>
        </>
    )
}

export default Basket