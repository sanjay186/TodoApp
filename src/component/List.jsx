import React ,{Component}from 'react';
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import  CheckBox  from './checkbox';


 export class List extends Component{
     
    static propTypes={
        todolist:PropTypes.array,
        tab:PropTypes.string.isRequired,
    }
    
    static defaultProps = {
        tab:'LIST'
    }

    render(){
        const todolist = this.props.todolist;
        const tab = this.props.tab;
        let switchedTab =[];
        if(tab ==='DONE'){
            switchedTab= todolist.filter((el)=>{
                return el.done === true;
            })
        }else if (tab ==='TODOLIST'){
            switchedTab= todolist.filter((el)=>{
                return el.done === false;
            
        })
            }else{
                switchedTab=todolist;
            }
    return(
        <div className="list">
            {switchedTab.map(el =>
           <CheckBox value = {el.name}  isdone={el.done}/>
            )}  
        
        </div>
    )
        }
}

const mapStateToProps = state => {
return{
    todolist : state.todolist, 
    tab : state.tab,  
}}


export default connect(mapStateToProps,null)(List);