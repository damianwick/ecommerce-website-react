import ProductCard from "./ProductCard"

import { ShopState } from "../context/Context"
import CategoriesSelection from "./CategoriesSelection"
import Filters from "./Filters"

const Products = () => {
    const { 
        stock: { products, saved },
        productFilter: { category, price, rating, isSaved } 
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
            filteredProducts = filteredProducts.filter((p) => Math.round(p.rating.rate) >= rating)
        }
        if(isSaved) {
            filteredProducts = saved
        }
        return filteredProducts
    }

    return (
        <>  
            <CategoriesSelection />
            <hr className="home-divider"/>
            <Filters />
            <div className="d-flex flex-wrap justify-content-around mt-2">
                {
                    filterProducts().map((p) => (
                        <ProductCard prod={p}/>
                    )) 
                }
            </div>  
        </>   
    )   
}

export default Products