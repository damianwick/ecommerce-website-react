export const productReducer = (state, action) => {
    switch(action.type) {
        case 'SET_PRODUCTS':
            return {products: [...action.payload], cart: [...state.cart], saved: [...state.saved]}
        case 'ADD_TO_CART':
            return {...state, cart: [...state.cart, action.payload]}
        case 'REMOVE_FROM_CART':
            return {...state, cart: [...state.cart.filter((p) => p.id !== action.payload)]}
        case 'CHANGE_PRODUCT_CATEGORY':
            return {...state, products: [...state.products.filter((p) => p.category === action.payload)]}
        case 'ADD_TO_SAVED':
            return {...state, saved: [...state.saved, action.payload]}
        case 'REMOVE_FROM_SAVED':
            return {...state, saved: [...state.saved.filter(p => p.id !== action.payload)]}
        default:
            return state
        }
}

export const filterReducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_PRODUCT_CATEGORY":
            return {...state, category: action.payload}
        case "SORT_BY_PRICE":
            return {...state, price: action.payload}
        case "SORT_BY_RATING":
            return {...state, rating: action.payload}
        case "CLEAR_FILTERS":
            return {category: '', price: '', rating: 0}
        default:
            return state
    }
}