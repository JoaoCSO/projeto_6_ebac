import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Product } from '../../models/Product'

interface CartItem extends Product {
    quantity: number
}

interface CartState {
    items: CartItem[]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Product>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id)

            if (existingItem) {
                existingItem.quantity++
            } else {
                state.items.push({ ...action.payload, quantity: 1 })
            }
        },
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload)
        },
        decreaseQuantity: (state, action: PayloadAction<number>) => {
            const item = state.items.find(item => item.id === action.payload)

            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                } else {
                    state.items = state.items.filter(item => item.id !== action.payload)
                }
            }
        },
        clearCart: (state) => {
            state.items = []
        },
        toggleCart: (state) => {
            state.isOpen = !state.isOpen
        },
        openCart: (state) => {
            state.isOpen = true
        },
        closeCart: (state) => {
            state.isOpen = false
        }
    }
})

export const {
    addToCart,
    removeFromCart,
    decreaseQuantity,
    clearCart,
    toggleCart,
    openCart,
    closeCart
} = cartSlice.actions

export default cartSlice.reducer

// Seletores
export const selectCartItems = (state: { cart: CartState }) => state.cart.items
export const selectCartIsOpen = (state: { cart: CartState }) => state.cart.isOpen
export const selectCartTotal = (state: { cart: CartState }) =>
    state.cart.items.reduce((total, item) => total + (item.preco * item.quantity), 0)
export const selectCartItemsCount = (state: { cart: CartState }) =>
    state.cart.items.reduce((total, item) => total + item.quantity, 0)