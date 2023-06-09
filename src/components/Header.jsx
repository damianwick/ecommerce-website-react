import { 
    Container, 
    Navbar,
    Button,
    Form,
    CloseButton
   } from 'react-bootstrap'
import { BsSearch } from 'react-icons/bs'
import { useEffect, useState } from 'react'
import { ShopState } from '../context/Context'
import { Link } from 'react-router-dom'
import CategoriesSelection from './CategoriesSelection'
import Basket from './Basket'

export default function Header() {
    const [showSearch, setShowSearch] = useState(true)
    const [width, setWidth] = useState(window.innerWidth)
    const {
        productFilterDispatch
    } = ShopState()

    const handleSearchShow = () => setShowSearch(!showSearch)

    useEffect(() => {
       window.addEventListener('resize', () => {
        setWidth(window.innerWidth)
       }) 
    }, [])
    const breakpoint = 837

    return (
        <Navbar className='cyan' expand='false'>
            <Container fluid>
                {width > breakpoint ? (
                    <>
                    <Navbar.Brand style={{marginRight: '-10px'}}>
                        <Link to='/' className='reset-link-style brand-link text-light'>eCommerce</Link>
                    </Navbar.Brand>
                    <CategoriesSelection width={width} breakpoint={breakpoint}/>
                    <div style={{fontSize: 25}} className='d-flex align-items-center'>
                        <Form onSubmit={e => {
                                e.preventDefault()
                            }}
                        >
                            <Form.Control
                            aria-label="small"
                            aria-describedby="inputGroup-sizing-sm"    
                            type='search'                    
                            placeholder='Search'
                            onChange={e => {
                                productFilterDispatch({type: "DISPLAY_SEARCH", payload: e.target.value})
                            }}
                            />
                        </Form>
                        <Basket />
                    </div>
                 </>
                ) : (
                    showSearch ? (
                        <>
                            <CategoriesSelection width={width} breakpoint={breakpoint} />
                            <Navbar.Brand style={{marginRight: '-10px'}} className='text-light'>eCommerce</Navbar.Brand>
                            <div style={{fontSize: 25}} className='d-flex align-items-center'>
                                <Button 
                                    className='ms-2 btn fs-4 text-white'
                                    variant='none'
                                    onClick={handleSearchShow}
                                >
                                    <BsSearch />
                                </Button>
                                <Basket />
                            </div>
                         </>
                    ) : (
                        <div className='d-flex align-items-center flex-row w-100 justify-content-center'>
                            <Form className='w-100'
                                style={{maxWidth: 414}}
                                onSubmit={e => {
                                    e.preventDefault()
                                }} 
                            >
                                <Form.Control
                                aria-label="small"
                                aria-describedby="inputGroup-sizing-sm"
                                type='search'                    
                                placeholder='Search'

                                onChange={e => {
                                    productFilterDispatch({type: "DISPLAY_SEARCH", payload: e.target.value})
                                }}
                                />
                            </Form>
                            <CloseButton className='ms-2' variant='white'  onClick={handleSearchShow}/>
                        </div>
                    )
                )}
            </Container>
        </Navbar>   
    )
}