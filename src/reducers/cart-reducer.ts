import { CartItem, Guitar } from "../types";
import { db } from "../utils/dbGuitar";

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
  cart: []
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
  }
}