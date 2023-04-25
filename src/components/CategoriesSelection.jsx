import { useState } from "react"
import { Button, Container, ListGroup, Offcanvas } from "react-bootstrap"
import { ShopState } from "../context/Context"
import { RxHamburgerMenu } from 'react-icons/rx'
import { Link } from "react-router-dom"
const CategoriesSelection = ({width, breakpoint}) => {
    const [categories, setCategories] = useState([
        {
            name: "All", 
            btnCategory: ''
        }, 
        {
            name: "Men",  
            btnCategory: "men's clothing"
        }, 
        {
            name: "Women",  
            btnCategory: "women's clothing"
        }, 
        {
            name: "Jewelery", 
            btnCategory: "jewelery"
        }, 
        {
            name: "Electronics",  
            btnCategory: "electronics"
        }
    ])

    const [showNav, setShowNav] = useState(false)

    const handleShowNav = () => setShowNav(!showNav)

    const { 
        productFilterDispatch,
        productFilter: {category}
     } = ShopState()
  
     const handleClick = (props) => {
        productFilterDispatch({type: 'CHANGE_PRODUCT_CATEGORY', payload: props.btnCategory})
     }

    return (
        <>
        {width > breakpoint ? (
                    <Container className="d-flex justify-content-center mt-2 categories-container w-50">   
                    {
                    categories.map((c) => (
                        <span>
                            <Link to='/'>
                        {c.btnCategory === category ? (
                                <Button 
                                size="sm"
                                key={c.name}
                                active 
                                variant="outline-light" 
                                className="rounded-pill mx-1"
                                onClick={() => handleClick(c)}
                            >
                                {c.name}
                            </Button> 
                        ) : (
                            <Button 
                            size="sm"
                            key={c.name} 
                            variant="none"
                            style={{color: '#fff'}} 
                            className="rounded-pill mx-1"
                            onClick={() => handleClick(c)}
                        >
                            {c.name}
                        </Button> 
                        )}
                        </Link>
                        </span>       
                    ))
                    }
                    </Container>
        ) : (
            <>
            <Button 
            onClick={handleShowNav}
            variant='none'
            className="text-white"
            >    
             <RxHamburgerMenu className="fs-4"/>
            </Button>
            <Offcanvas show={showNav} onHide={handleShowNav}>
                <Offcanvas.Header closeButton>Categories</Offcanvas.Header>
                <Offcanvas.Body>
                <ListGroup>
                {categories.map((c) => (
                        <Link to="/">
                        {c.btnCategory === category ? (
                                <Button 
                                key={c.name}
                                active
                                variant="outline-light" 
                                className="list-item m-1 rounded-pill w-100"
                                onClick={() => {
                                    handleClick(c)
                                    handleShowNav()
                                }}
                            >
                                {c.name}
                            </Button> 
                        ) : (
                            <Button 
                            key={c.name} 
                            className="list-item m-1 rounded-pill w-100"
                            variant="none"
                            onClick={() => {
                                handleClick(c)
                                handleShowNav()
                            }}
                        >
                            {c.name}
                        </Button> 
                        )}
                        </Link>
                         
                    ))    
                }
                    </ListGroup>  

                </Offcanvas.Body>
            </Offcanvas>
            </>
        )}
           
        </>
        
    )
}

export default CategoriesSelection