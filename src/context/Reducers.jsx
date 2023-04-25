export const productReducer = (state, action) => {
    switch(action.type) {
        case 'SET_PRODUCTS':
            return {products: [...action.payload], basket: [...state.basket], saved: [...state.saved]}
        case 'ADD_TO_BASKET':
            return {...state, basket: [...state.basket, action.payload]}
        case 'REMOVE_FROM_BASKET':
            return {...state, basket: [...state.basket.filter((p) => p.id !== action.payload)]}
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
            return {...state, price: action.payload, filtersActive: true}
        case "SORT_BY_RATING":
            return {...state, rating: action.payload, filtersActive: true}
        case "CLEAR_FILTERS":
            return {...state, price: '', rating: '', saved: '', search: '', filtersActive: false}
        case "DISPLAY_SAVED":
            return {...state, isSaved: !state.isSaved}
        case "DISPLAY_SEARCH":
            return {...state, search: action.payload}
        default:
            return state
    }
}

export const singleProdReducer = (state, action) => {
    switch(action.type) {
        case "SET_SINGLE_PRODUCT":
            return {
                title: action.payload.title, 
                description: action.payload.description,
                image: action.payload.image, 
                price: action.payload.price, 
                rating: action.payload.rating,
                id: action.payload.id
            }
    }
}