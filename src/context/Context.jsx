import { useEffect, createContext, useContext, useReducer } from "react"
import { filterReducer, productReducer } from "./Reducers";
// import { fakeStore } from "./fakeStore";

const Shop = createContext([]);

const Context = ({ children }) => {    
    // fetching data as soon as the aplication loads
    const [stock, shopStateDispatch] = useReducer(productReducer, {
        products: [],
        cart: [],
        saved: []
    })

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(p => {
                shopStateDispatch({type: 'SET_PRODUCTS', payload: p})
            })
            .catch(err => console.log('we\'re in a pickle: ' + err.message))
    }, [])
    
    const [productFilter, productFilterDispatch] = useReducer(filterReducer, {
        category: '',
        price: '',
        rating: 0
    })

    return (
        <Shop.Provider value={{ stock, shopStateDispatch, productFilter, productFilterDispatch }}>
            {children}
        </Shop.Provider>
    )
}

export default Context

export const ShopState = () => {
    return useContext(Shop)
}
