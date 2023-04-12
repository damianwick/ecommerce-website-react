import ProductCard from "./ProductCard"
import Context from "../context/Context"
import { ShopState } from "../context/Context"
import { useContext, useEffect, useReducer } from "react"
import { productReducer } from "../context/Reducers"
const Products = () => {
    const { 
        stock: { products }, 
        shopStateDispatch
    } = ShopState()
    
    return (
        <>
            <div className="d-flex flex-wrap justify-content-around">
                {
                    products.map((p) => (
                        <ProductCard
                            prod={p}
                        />
                    )) 
                }
            </div>  
        </>   
    )   
}

export default Products