import ProductCard from "./ProductCard"
import { ShopState } from "../context/Context"

const Products = () => {
    const { 
        stock: { products },
        productFilter: { category } 
    } = ShopState()
    

    const filterProducts = () => {
        let filteredProducts = products
        if(category === "women's clothing") {
            filteredProducts = filteredProducts.filter(p => p.category === category)
        }
        if(category === "men's clothing") {
            filteredProducts = filteredProducts.filter(p => p.category === category)
        }   
        if(category === "jewelery") {
            filteredProducts = filteredProducts.filter(p => p.category === category)
        }   
        if(category === "electronics") {
            filteredProducts = filteredProducts.filter(p => p.category === category)
        }   
        return filteredProducts
    }

    console.log(category)
    console.log(typeof filterProducts())

    return (
        <>
            <div className="d-flex flex-wrap justify-content-around">
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