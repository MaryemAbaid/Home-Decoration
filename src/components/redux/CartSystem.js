import { createSlice } from "@reduxjs/toolkit";

const cartSystem = createSlice({
  name: "cart",
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      // Check if item is already in cart
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      if (index >= 0) {
        // Item is in cart, increment quantity
        state.cart[index].quantity += 1;
      } else {
        // Item is not in cart, add it
        state.cart.push({
          ...action.payload,
          quantity: 1,
        });
      }
    },

    removeFromCart: (state, action) => {
      const index = state.cart.findIndex(
        (cartItem) => cartItem.id === action.payload.id
      );
      let newCart = [...state.cart];
      if (index >= 0) {
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.payload.id}) as its not in the cart!`
        );
      }
      state.cart = newCart;
    },
  },
});

export const { addToCart, removeFromCart } = cartSystem.actions;
export default cartSystem.reducer;
