import React from 'react'

const Options = ()=>{
    return(

    <nav>
        <a onClick={()=>{alert("Done List")}}>Done List</a>
        <a onClick={()=>{alert("Todo List")}}>Todo List</a>
        <a onClick={()=>{alert("delete List")}}>delete List</a>
    </nav>
    );
}

export default Options;