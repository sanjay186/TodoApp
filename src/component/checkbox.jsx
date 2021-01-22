import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import{ bindActionCreators} from 'redux'
import {complete} from '../actions/action';
 export const CheckBox =(props)=>{
   
    function onclick(){
        props.complete({value: props.value,
            isdone:!props.isdone,
        })
   }
    return(
       
      <div>
           <input type="checkbox"  checked={props.isdone} onChange={()=>onclick()}/>
           {props.isdone ? <strike>  
        <label>{props.value}</label> </strike> :<label>{props.value}</label>
           }
       </div>
    );
}
CheckBox.prototype={
    value:PropTypes.string,
    isdone:PropTypes.bool,
    complete:PropTypes.func,
}


const mapDispatchToProps = (dispatch) => {
    return{
     ...bindActionCreators({complete} , dispatch)
    }}



 export default connect(null,mapDispatchToProps)(CheckBox);

  