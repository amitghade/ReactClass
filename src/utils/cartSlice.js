import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItems: (state, action) => {
      const existingItem = state.items.find((item) => {
        return item.card.info.id == action.payload.card.info.id;
      });

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    increaseQuantity: (state, action) => {
      const item = state.items.find((item) => {
        return item.card.info.id === action.payload;
      });

      if (item) {
        item.quantity += 1;
      }
    },
    removeItems: (state, action) => {
      state.items.pop();
    },
    clearItems: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const { addItems, clearItems, removeItems, increaseQuantity } =
  cartSlice.actions;

export default cartSlice.reducer;
