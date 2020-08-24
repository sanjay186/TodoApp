import React ,{Component}from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import  CheckBox  from './checkbox';

 export class List extends Component{
     
    static propTypes={
        todolist:PropTypes.array,
    }

    render(){
        const todolist = this.props.todolist;
        console.log(todolist);
    return(
        <div className="list">
            {todolist.map(el =>
           <CheckBox value = {el.name}  isdone={el.done}/>
            )}
             
           
        
        </div>
    )
        }
}

const mapStateToProps = state => {
return{
    todolist : state.todolist,   
}}
export default connect(mapStateToProps,null)(List);