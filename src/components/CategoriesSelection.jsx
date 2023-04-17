import { useState } from "react"
import { Button, Container } from "react-bootstrap"
import { ShopState } from "../context/Context"
const CategoriesSelection = () => {
    const [categories, setCategories] = useState([
        {
            name: "All", 
            active: false,
            category: ''
        }, 
        {
            name: "Men", 
            active: false, 
            category: "men's clothing"
        }, 
        {
            name: "Women", 
            active: false, 
            category: "women's clothing"
        }, 
        {
            name: "Jewelery",
            active: false, 
            category: "jewelery"
        }, 
        {
            name: "Electronics", 
            active: false, 
            category: "electronics"
        }
    ])
    const { 
        productFilterDispatch
     } = ShopState()
  
     const handleClick = (props) => {
        productFilterDispatch({type: 'CHANGE_PRODUCT_CATEGORY', payload: props.category})
     }

    return (
        <>
            <Container className="d-flex justify-content-start mt-3 overflow-scroll">   
                {
                categories.map((c) => (
                    c.active ? (
                        <Button 
                            key={c.name} 
                            variant="outline-secondary" 
                            className="rounded-pill" 
                            active
                        >
                                {c.name}
                        </Button>
                     ) : (
                        <Button 
                            key={c.name} 
                            variant="outline-secondary" 
                            className="rounded-pill mx-1"
                            onClick={() => handleClick(c)}
                        >
                            {c.name}
                        </Button> 
                     )
        
                ))
            }
            </Container>
        </>
        
    )
}

export default CategoriesSelection