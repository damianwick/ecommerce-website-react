import { 
    Container, 
    Navbar,
    Button,
    InputGroup,
    Form,
    CloseButton
   } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import BasketButton from './BasketButton'
import { useEffect, useState } from 'react'
import { ShopState } from '../context/Context'
import { Link } from 'react-router-dom'
import CategoriesSelection from './CategoriesSelection'

export default function Header() {
    const [showSearch, setShowSearch] = useState(true)
    const [width, setWidth] = useState()
    const {
        stock: { products },
        productFilterDispatch
    } = ShopState()

    const handleSearchShow = () => setShowSearch(!showSearch)

    useEffect(() => {
       window.addEventListener('resize', () => {
        setWidth(window.innerWidth)
       }) 
    }, [])
    const breakpoint = 576

    return (
        <Navbar bg='light' expand='false'>
            <Container fluid>
                {width > breakpoint ? (
                    <>
                    <Navbar.Brand style={{marginRight: '-10px'}}>
                        <Link to='/' className='reset-link-style brand-link'>eCommerce</Link>
                    </Navbar.Brand>
                    <CategoriesSelection />
                    <div style={{fontSize: 25}} className='d-flex align-items-center'>
                        <Form onSubmit={e => {
                                e.preventDefault()
                            }} 
                            className='mt-2'
                        >
                        <InputGroup size="sm">
                            <InputGroup.Text id="inputGroup-sizing-sm"><BsSearch /></InputGroup.Text>
                            <Form.Control
                            aria-label="small"
                            aria-describedby="inputGroup-sizing-sm"    
                            type='search'                    
                            placeholder='Search'
                            onChange={e => {
                                productFilterDispatch({type: "DISPLAY_SEARCH", payload: e.target.value})
                            }}
                            />
                        </InputGroup>
                        </Form>
                        <BasketButton />
                    </div>
                 </>
                ) : (
                    showSearch ? (
                        <>
                            <Navbar.Brand style={{marginRight: '-10px'}}>eCommerce</Navbar.Brand>
                            <div style={{fontSize: 25}} className='d-flex align-items-center'>
                                <Button 
                                    className='ms-2 btn btn-light fs-4'
                                    onClick={handleSearchShow}
                                >
                                    <BsSearch />
                                </Button>
                                <BasketButton />
                            </div>
                         </>
                    ) : (
                        <div className='d-flex align-items-center flex-row w-100'>
                            <Form className='w-100'
                                onSubmit={e => {
                                    e.preventDefault()
                                }} 
                            >
                            <InputGroup size="lg">
                            <InputGroup.Text id="inputGroup-sizing-sm"><BsSearch /></InputGroup.Text>
                                    <Form.Control
                                    aria-label="small"
                                    aria-describedby="inputGroup-sizing-sm"    
                                    type='search'                    
                                    placeholder='Search'
                                    onChange={e => {
                                      productFilterDispatch({type: "DISPLAY_SEARCH", payload: e.target.value})
                                    }}
                                    />
                                    
                            </InputGroup>
                            </Form>
                            <CloseButton className='ms-2' onClick={handleSearchShow}/>
                        </div>
                    )
                )}
                
                   
            </Container>
        </Navbar>   
    )
}