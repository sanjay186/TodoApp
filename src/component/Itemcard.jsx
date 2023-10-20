import React from "react";
import "./styles/ItemCard.css";
import { useDispatch } from 'react-redux';
import { changeStatus } from "../Redux/ItemReducer";
import {STATUS_TYPE} from "../Redux/reducerConstant";

const  ItemCard =(props)=>{
  const dispatch = useDispatch();
  const {itemData} = props;
  console.log("itemsDataghfghf==>",itemData)
    return(

        <div className="item-wrapper">
         
       {itemData&& <div className={`item-card ${itemData.status === 'todo'?`border-color-todo`: `${itemData.status === 'onGoing'?"border-color-onGoing":"border-color-done"}`}`} >
       
      <h3 className="h3-text">{itemData.value }</h3>
      <span>
    { itemData.status === "todo" &&<button className="item-btn" 
    onClick={()=>{dispatch(changeStatus({id:itemData.id,status:STATUS_TYPE.ONGOING}))}}>Start
    </button> }
     { itemData.status ==="onGoing"&& <>
       <button onClick={()=>{dispatch(changeStatus({id:itemData.id,status:STATUS_TYPE.TODO}))}}className="item-btn">
       Not Started</button> 
     <button onClick={()=>{dispatch(changeStatus({id:itemData.id,status:STATUS_TYPE.COMPELTED}))}}className="item-btn">
      Done</button> </> }
      
      </span>
     
      </div>
      }
      <br/>
       
        </div>
        
    )
    }

    export default ItemCard;