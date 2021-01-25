import React from 'react'
import {connect} from 'react-redux'
import{ bindActionCreators} from 'redux'
import { switchtab ,deleteAction} from '../actions/action';

export const Options = (props)=>{

    const donelist= () =>(
       props.switchtab({
           tab:'DONE',

       })
    )
    const todolist= () =>(
        props.switchtab({
            tab:'TODOLIST',
 
        })
     )
const deleteList= () =>(
        props.deleteAction({tab:'DELETE',
    })
     )
     
    return(

    <nav>
        <a onClick={donelist}>Done List |</a>
        <a onClick={todolist}> Todo List |</a>
        <a onClick={deleteList}> delete List </a>
    </nav>
    );
}


    const mapDispatchToProps = (dispatch) => {
        return{
         ...bindActionCreators({switchtab,deleteAction} , dispatch)
        }}
    
    export default connect(null,mapDispatchToProps)(Options);
