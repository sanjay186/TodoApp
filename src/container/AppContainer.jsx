import React from "react";
import AddValue from "../component/AddValue";
import "./Styles/AppContainer.css";
import ItemCard from "../component/Itemcard";

const AppContainer =() =>{
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
<ItemCard/>
  
  
</div>
<div className="col">
<div className="heading"> 
<h2>On going</h2>
</div>
<ItemCard/>
</div>
<div className="col">
<div className="heading"> 
<h2>Done</h2>
</div>
<ItemCard/>
</div>

      </div>
      </>
    );
}
export default AppContainer;