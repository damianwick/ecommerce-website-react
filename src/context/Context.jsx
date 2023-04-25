import { useEffect, createContext, useContext, useReducer } from "react"
import { filterReducer, productReducer, singleProdReducer } from "./Reducers";

const Shop = createContext([]);

const Context = ({ children }) => {    
    const [stock, shopStateDispatch] = useReducer(productReducer, {
        products: [],
        basket: [],
        saved: []
    })

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(p => {
                shopStateDispatch({type: 'SET_PRODUCTS', payload: p})
            })
            .catch(err => console.log('ERROR MESSAGE: ' + err.message))
    }, [])
    
    const [productFilter, productFilterDispatch] = useReducer(filterReducer, {
        category: '',
        price: '',
        rating: '',
        isSaved: false, 
        search: '',
        filtersActive: false
    })

    const [singleProductState, singleProductDispatch] = useReducer(singleProdReducer, {
        title: '', 
        description: '',
        image: '',
        price: '',
        rating: '',
        id: ''
    })

    return (
        <Shop.Provider 
            value={{ 
                stock, 
                shopStateDispatch, 
                productFilter, 
                productFilterDispatch, 
                singleProductState, 
                singleProductDispatch 
            }}>
            {children}
        </Shop.Provider>
    )
}

export default Context

export const ShopState = () => {
    return useContext(Shop)
}
