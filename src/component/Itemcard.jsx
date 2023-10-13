import React from "react";
import "./styles/ItemCard.css";

const  ItemCard =(props)=>{
  const {itemData} = props;
  console.log("itemsDataghfghf==>",itemData)
    return(

        <div className="item-wrapper">
       {itemData&& <div className="item-card">
      <h3>{itemData.value }</h3>
        </div> }
        
        </div>
        
    )
    }

    export default ItemCard;