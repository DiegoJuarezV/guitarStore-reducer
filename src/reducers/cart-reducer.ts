import { CartItem, Guitar } from "../types";
import { db } from "../utils/dbGuitar";

const lsCart : CartItem[] = JSON.parse(localStorage.getItem("cart") || '[]');

export type ActivityAction = 
  { type: "ADD_CART", payload: { guitar: Guitar }} |
  { type: "REMOVE_FROMCART", payload: { id: Guitar['id'] }} |
  { type: "DECREASE_QUANTITY", payload: { id: Guitar['id'] }} |
  { type: "INCREASE_QUANTITY", payload: { id: Guitar['id'] }} |
  { type: "CLEAR_CART" }

export type CartState = {
  data: Guitar[]
  cart: CartItem[]
}

export const initialState: CartState = {
  data: db,
  cart: lsCart
}

export const cartReducer = (state: CartState = initialState, action: ActivityAction) => {
  switch (action.type) {
    case "ADD_CART": {
      const itemExists = state.cart.find((item) => item.id === action.payload.guitar.id);
      const updatedCart = itemExists ? state.cart.map(item =>
        item.id === action.payload.guitar.id ? { ...item, quantity: Math.min(item.quantity + 1, 5) }
          : item
      ) : [ ...state.cart, { ...action.payload.guitar, quantity: 1 }]
      return { ...state, cart: updatedCart }
    }
    case "REMOVE_FROMCART": {
      const updatedRemoveCart = state.cart.filter((item) => item.id !== action.payload.id)
      return { ...state, cart: updatedRemoveCart }
    }
    case "INCREASE_QUANTITY":{
      const updatedIncrease = state.cart.map((guitar) => 
        guitar.id === action.payload.id && guitar.quantity < 5 ? { ...guitar, quantity: guitar.quantity + 1 } : guitar
      )
      return { ...state, cart: updatedIncrease }
    }
    case "DECREASE_QUANTITY": {
      const updatedDecrease = state.cart.map((guitar) => 
        guitar.id === action.payload.id && guitar.quantity > 1 ? { ...guitar, quantity: guitar.quantity - 1 } : guitar
      )
      return { ...state, cart: updatedDecrease }
    }
    case "CLEAR_CART":
      return { ...state, cart: [] }
  }
}