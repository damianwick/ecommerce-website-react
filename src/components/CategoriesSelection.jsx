import { useState } from "react"
import { Button, Container } from "react-bootstrap"
import { ShopState } from "../context/Context"
const CategoriesSelection = () => {
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

    const { 
        productFilterDispatch,
        productFilter: {category}
     } = ShopState()
  
     const handleClick = (props) => {
        productFilterDispatch({type: 'CHANGE_PRODUCT_CATEGORY', payload: props.btnCategory})
     }

    return (
        <>
            <Container className="d-flex justify-content-center mt-2 overflow-scroll categories-container">   
                {
                categories.map((c) => (
                    <span>
                    {c.btnCategory === category ? (
                            <Button 
                            key={c.name}
                            active 
                            variant="light" 
                            className="rounded-pill mx-1 p-2"
                            onClick={() => handleClick(c)}
                        >
                            {c.name}
                        </Button> 
                    ) : (
                        <Button 
                        key={c.name} 
                        variant="light" 
                        className="rounded-pill mx-1 p-2"
                        onClick={() => handleClick(c)}
                    >
                        {c.name}
                    </Button> 
                    )}
                    </span>       
                ))
            }
            </Container>
        </>
        
    )
}

export default CategoriesSelection