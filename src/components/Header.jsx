import { 
    Container, 
    Navbar, 
    Offcanvas, 
    Nav, 
    NavDropdown
   } from 'react-bootstrap'
import { BsCart, BsSearch } from 'react-icons/bs'

export default function Header() {
    return (
        <Navbar bg='light' expand='false'>
            <Container fluid>
                <Navbar.Toggle aria-controls='offcanvas-expand-false'/>
                <Navbar.Offcanvas
                    id={`offcanvasNavbar-expand-false`}
                    aria-labelledby={`offcanvasNavbarLabel-expand-false`}
                    placement="end"
                    >
                    <Offcanvas.Header closeButton>
                        <Offcanvas.Title id='offcanvasNavbarLabel-expand-false'>
                        eCommerce
                        </Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                        <NavDropdown
                            title="Categories"
                            id='offcanvasNavbarDropdown-expand-false'
                        >
                            <NavDropdown.Item href="#action3">Men</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">Women</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Jewelery</NavDropdown.Item>
                            <NavDropdown.Item href="#action5">Electronics</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#action1">Home</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                    <Navbar.Brand style={{marginRight: '-10px'}}>eCommerce</Navbar.Brand>
                    <div style={{fontSize: 25}}>
                        <BsSearch />
                        <BsCart style={{margin: '0 0 0 10px'}}/>
                    </div>
            </Container>
        </Navbar>   
    )
}