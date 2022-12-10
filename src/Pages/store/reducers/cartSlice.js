import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,

};

export const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const product = state?.cartItems?.findIndex(
        (item) => item.id === action.payload.id
      );
      if (product >= 0) {
        state.cartItems[product].cartQuantity += 1;
        state.cartItems[product].singleCartTotal = action.payload.price * state.cartItems[product].cartQuantity;
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1, singleCartTotal:action.payload.price };
        state.cartItems.push(tempProduct);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },

    removeFromCart(state, action) {
      state.cartItems.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          const nextCartItems = state.cartItems.filter(
            (item) => item.id !== cartItem.id
          );

          state.cartItems = nextCartItems;
        }
        localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
        return state;
      });
    },
    // allRemoveFromCart() {
     
    //   localStorage.removeItem('cartItems');
    
    // },
    decreaseCart(state, action) {
      const product = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );

      if (state.cartItems[product].cartQuantity > 1) {
        state.cartItems[product].cartQuantity -= 1;
        state.cartItems[product].singleCartTotal = action.payload.price * state.cartItems[product].cartQuantity;
      } 

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    incrementCart(state, action) {
      const product = state.cartItems.findIndex(
        (item) => item.id === action.payload.id
      );
      if (product >= 0) {
        if( state.cartItems[product].cartQuantity < action.payload.quantity){
          state.cartItems[product].cartQuantity += 1;
        }
        else{
          return;
        }
        
        state.cartItems[product].singleCartTotal = action.payload.price * state.cartItems[product].cartQuantity;
        
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 , singleCartTotal:action.payload.price };
        state.cartItems.push(tempProduct);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    addByIncrement(state, action) {
      const product = state.cartItems.findIndex(
        (item) => item.id === action.payload.product.id
      );
      if (product >= 0) {
        state.cartItems[product].cartQuantity +=action.payload.cartQuantity;
      } else {
        const cartQuantity = action.payload.cartQuantity===1?1:action.payload.cartQuantity 
        const tempProduct = { ...action.payload.product,cartQuantity};
        state.cartItems.push(tempProduct);
      }

      localStorage.setItem("cartItems", JSON.stringify(state.cartItems));
    },
    getTotals(state, action) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { price, cartQuantity } = cartItem;
          const itemTotal = price * cartQuantity;

          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          
          return cartTotal;
        },
        {
          total: 0,
          quantity: 0,
        }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    }
  },
});

export const { addToCart, removeFromCart, allRemoveFromCart, decreaseCart,incrementCart, getTotals,addByIncrement} = CartSlice.actions;

export const cartReducer = CartSlice.reducer;
