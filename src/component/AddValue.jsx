import React,  {useState} from "react";
import "../component/styles/componentStyles.css";
import { addItem } from "../Redux/ItemReducer";
import { useDispatch } from 'react-redux';
import {genrateId , getCurrentDate}from '../common/common';
import {STATUS_TYPE}from '../Redux/reducerConstant'

export const AddValue =()=> {
  
const [value , setValue]= useState("");
const dispatch = useDispatch();
const handleChange = (event) => {
 
      setValue(event.target.value)
  };

  const handleSubmit = (event) => {
    if (value !== "") {
      console.log(event);
      dispatch(addItem(
        {
          id: genrateId(),
          value: value,
          status: STATUS_TYPE.TODO,
          created_date: getCurrentDate(),
        },
      ))
      
     
      setValue("");
    }
  };

  
    return (
      <div className="form">
       
          Add Item to list: <br/>
          <input
            type="text"
            value={value}
            onChange={handleChange}
          />
          <input type="button" value="Add item"  onClick={handleSubmit}/>
       
      </div>
    );
  
}
export default AddValue;