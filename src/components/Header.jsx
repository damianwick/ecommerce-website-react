import { 
    Container, 
    Navbar, 
    Button
   } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import CartButton from './CartButton'

export default function Header() {
  
    
    return (
        <Navbar bg='light' expand='false'>
            <Container fluid>
                    <Navbar.Brand style={{marginRight: '-10px'}}>eCommerce</Navbar.Brand>
                    <div style={{fontSize: 25}} className='d-flex align-items-center'>
                        <Button className='ms-2 btn btn-light fs-4'>
                            <BsSearch />
                        </Button>
                        <CartButton />
                    </div>
            </Container>
        </Navbar>   
    )
}