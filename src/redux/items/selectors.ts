import { RootState } from "redux/store";

export const getAllItems = (state: RootState) => state.items.allItems;
