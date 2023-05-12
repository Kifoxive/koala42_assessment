import { IItemsSliceState, ITable } from "./types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { searchTree } from "../../utils/index";

const initialState: IItemsSliceState = {
  allItems: [],
};

const itemsSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setAllItems(state, action: PayloadAction<ITable[]>) {
      state.allItems = action.payload;
    },
    removeItem(state, action: PayloadAction<string>) {
      state.allItems = state.allItems.filter(searchTree(action.payload));
    },
  },
});

export const { setAllItems, removeItem } = itemsSlice.actions;

export default itemsSlice.reducer;
