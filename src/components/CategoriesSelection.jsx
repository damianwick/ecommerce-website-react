import { useState } from "react"
import { Button, Container } from "react-bootstrap"
const CategoriesSelection = () => {
    const [categories, setCategories] = useState([
        {
            name: "All", 
            active: false,
            category: null
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

    
    return (
        <>
            <Container className="d-flex justify-content-start mt-3 overflow-scroll">   
                {
                categories.map((c) => (
                    c.active ? (
                        <Button key={c.name} variant="outline-secondary" className="rounded-pill" active>{c.name}</Button>
                     ) : (
                        <Button key={c.name} variant="outline-secondary" className="rounded-pill mx-1">{c.name}</Button> 
                     )
        
                ))
            }
            </Container>
            <hr className="home-divider"/>
            
        </>
        
    )
}

export default CategoriesSelection