import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItems: (state, action) => {
      console.log("Action Payload", action.payload);
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
    decreseQuantity: (state, action) => {
      const item = state.items.find((item) => {
        return item.card.info.id === action.payload;
      });
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items = state.items.filter((item) => {
            return item.card.info.id !== action.payload;
          });
        }
      }
    },

    removeItems: (state, action) => {
      const item = state.items.find((item) => {
        return item.card.info.id === action.payload;
      });

      if (item) {
        state.items = state.items.filter((item) => {
          return item.card.info.id !== action.payload;
        });
      }
    },
    clearItems: (state, action) => {
      state.items.length = 0;
    },
  },
});

export const {
  addItems,
  clearItems,
  removeItems,
  increaseQuantity,
  decreseQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
