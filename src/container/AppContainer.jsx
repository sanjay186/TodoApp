import React from "react";
import AddValue from "../component/AddValue";
import "./Styles/AppContainer.css";
import ItemCard from "../component/Itemcard";
import { useSelector } from 'react-redux'



const AppContainer =() =>{
  const items = useSelector((state) => state.itemReducer.ItemList);

    return (
        <>
         <div className="inputclass">
     <AddValue/>
      </div>
      <div className="appcontainer">

<div className="col">
 
 <div className="heading"> 
 <h2 >Todo</h2>
 </div>
 {items.map((item)=>{
 
        if(item.status === "todo"){
       return (
     
       <ItemCard itemData = {item}/>
       )}
      })   }  
</div>
<div className="col">
<div className="heading"> 
<h2>On going</h2>
</div>
{items.map((item)=>{
 
 if(item.status === "onGoing"){
return (

<ItemCard itemData = {item}/>
)}
})   }  

</div>
<div className="col">
<div className="heading"> 
<h2>Done</h2>
</div>
{items.map((item)=>{
 
 if(item.status === "done"){
return (

<ItemCard itemData = {item}/>
)}
})   }  

</div>

      </div>
      </>
    );
}
export default AppContainer;