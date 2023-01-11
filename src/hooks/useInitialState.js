import { useState } from "react"

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState)

    const addToCart = (payload) => {
        setState({
            ...state, // manten la informacion
            cart: [...state.cart, payload] // manten lo que existe y agrega lo que voy a pasar
        })
    }

    const removeFromCart = (payload) => {
        setState({
            ...state,
            cart: state.cart.filter((product, index) => index !== payload),
        })
    }

    return {
        state,
        addToCart,
        removeFromCart
    }
}

export default useInitialState
