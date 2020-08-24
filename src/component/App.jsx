import React from 'react';
import List from './List'
import Options from './options';
import AddValue from './AddValue';

 export default class App extends React.Component{

    render(){
    return(
        <div>
      <AddValue/>
      <h1> To-do list</h1>
        <List/>
        <Options/>
        </div>
    )
}

} 

