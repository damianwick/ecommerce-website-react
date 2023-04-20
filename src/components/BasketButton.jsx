import { Button, Offcanvas, Container, Row } from "react-bootstrap"
import { BsCart } from "react-icons/bs"
import { useEffect, useState } from "react"
import { ShopState } from "../context/Context"
import { ImBin } from "react-icons/im"
const BasketButton = () => {
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
        <Button className='ms-2 btn btn-light fs-4' onClick={handleShowCart}>
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
                                            type: "REMOVE_FROM_CART", 
                                            payload: p.id
                                            }
                                        )
                                }} >
                                <ImBin />
                            </span>
                        </div>
                    ))}
                    <h1 className="text-center">Total: £{cartTotal} </h1>
                    <Row className="justify-content-center">
                        <Button variant="dark" className="rounded-pill w-75">Go to checkout</Button>
                    </Row>
                    </Container>
                ) : (
                    <span>Basket is Empty</span>
                )}

            </Offcanvas.Body>
        </Offcanvas>
        </>
        
    )
}

export default BasketButton