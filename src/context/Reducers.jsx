export const productReducer = (state, action) => {
    switch(action.type) {
        case 'SET_PRODUCTS':
            return {products: [...action.payload], cart: [...state.cart]}
        case 'ADD_TO_CART':
            return {...state, cart: [...state.cart, action.payload]}
        case 'REMOVE_FROM_CART':
            return {...state, cart: [...state.cart.filter((p) => p.id !== action.payload)]}
        case 'CHANGE_PRODUCT_CATEGORY':
            return { ...state, products: [...state.products.filter((p) => p.category === action.payload)]}
        default:
            console.log('Wrong case')
            break
        }
}

export const filterReducer = (state, action) => {
    switch(action.type) {
        case "CHANGE_PRODUCT_CATEGORY":
            return {...state, category: action.payload}
    }
}