import { createSlice } from "@reduxjs/toolkit";
import { STATUS_TYPE } from "./reducerConstant";
import { getCurrentDate ,genrateId} from "../common/common";

const initialState = {
  ItemList: [
    {
      id: genrateId(),
      value: "Tests card 1",
      status: STATUS_TYPE.TODO,
      created_date: getCurrentDate(),
    },
    {
      id: genrateId(),
      value: "Tests card 2",
      status: STATUS_TYPE.COMPELTED,
      created_date: getCurrentDate(),
    },
    {
      id: genrateId(),
      value: "Tests card 3",
      status: STATUS_TYPE.ONGOING,
      created_date: getCurrentDate(),
    },
    {
      id: genrateId(),
      value: "Tests card 4",
      status: STATUS_TYPE.TODO,
      created_date: getCurrentDate(),
    },
  ],
};

export const itemReducer = createSlice({
  name: "ItemList",
  initialState,
  reducers: {
    addItem: (state, action) => {
      return { ...state, ItemList: [...state.ItemList, action.payload] };
    },
    changeState: (state) => {},
  },
});
export const { addItem, changeState } = itemReducer.actions;
export default itemReducer.reducer;
