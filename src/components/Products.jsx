import ProductCard from "./ProductCard"
import { ShopState } from "../context/Context"

const Products = () => {
    const { 
        stock: { products },
        productFilter: { category, price, rating } 
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
        return filteredProducts
    }

    return (
        <>
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