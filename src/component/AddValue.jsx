import React ,{Component}from 'react';
import {connect} from 'react-redux';
import{ bindActionCreators} from 'redux'
import {addToList} from '../actions/action';
import PropTypes from 'prop-types';


export class AddValue extends Component{

    constructor(props){
        super(props)
        this.state={
            value:'',
        }
    }
    handleChange=(event)=>{
        this.setState({
            value:event.target.value,
        })
    }
    handleSubmit=(event)=>{
       
        this.props.addToList({
            value:this.state.value,
            isdone: false,
        })
        console.log(this.state.value);
        event.preventDefault();
        this.setState({
            value:'',
        })
    }

  render(){
      return(
          
        <form onSubmit={this.handleSubmit}>
            Add Item to list:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        <input type="submit" value="Submit" />
      </form>
      )
  }
}

  const mapDispatchToProps = (dispatch) => {
    return{
     ...bindActionCreators({addToList} , dispatch)
    }}



 export default connect(null,mapDispatchToProps)(AddValue);


 AddValue.propTypes={
    addToList:PropTypes.func,
 }