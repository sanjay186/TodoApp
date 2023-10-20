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
  initialState:initialState,
  reducers: {
    addItem: (state, action) => {
      console.log("action.paylaod",action.payload);
     
      
      state.ItemList=[...state.ItemList,action.payload] ;
      },
  
   changeStatus: (state,action) => {
    console.log("change action.paylaod",action.payload);
   const foundItem = state.ItemList.findIndex(x => x.id === action.payload.id);
   state.ItemList[foundItem].status=action.payload.status;
   },
  },
});
export const { addItem,changeStatus } = itemReducer.actions;
export default itemReducer.reducer;
