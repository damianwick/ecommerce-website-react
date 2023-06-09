import ProductCard from "./ProductCard"
import { ShopState } from "../context/Context"
import Filters from "./Filters"
import { Container, Image} from "react-bootstrap"
import personShopping from '../assets/person-shopping.jpg'
import { useEffect } from "react"

const Products = () => {
    const { 
        stock: { products, saved },
        productFilter: { category, price, rating, isSaved, search } 
    } = ShopState()
    
    const filterProducts = () => {
        let filteredProducts = products
        if(category) {
            filteredProducts = filteredProducts.filter(p => p.category === category)
        }
        if(price) {
            filteredProducts = filteredProducts.sort((a, b) => (
                price === 'low-to-high' ? a.price - b.price : b.price - a.price
            ))
        }
        if(rating) {
            filteredProducts = filteredProducts.filter(p => Math.round(p.rating.rate) >= rating)
        }
        if(isSaved) {
            filteredProducts = saved
        }
        if(search) {
            filteredProducts = filteredProducts.filter(p => 
                p.title.toLowerCase().includes(search.toLowerCase())
            )
        }
        return filteredProducts
    }    

    return (
        <>      
            <Image src={personShopping} fluid alt="person-shopping"/>
            <Container>
            <Filters />
            <div 
                className="
                    d-flex 
                    flex-wrap 
                    justify-content-center 
                    mt-2 
                    mx-auto
                " 
                style={{paddingBottom: 200}}>
               {
                    filterProducts().map((p) => (
                        <ProductCard prod={p} key={p.id}/>
                    )) 
                }
            </div>
            </Container>  
        </>   
    )   
}

export default Products