import React, { Component } from 'react';
import { connect } from 'react-redux';
class InputSearch extends Component {
  state = {  }
  render() { 
    return ( <div>
      <input type="text" onChange={(e)=>{this.props.searchinput(e.target.value)}}/>
      <span>Search</span>
    </div> );
  }
}
const mapDispatchToProps=dispatch=>{
  return{
    searchinput:x=>{
      dispatch({type:"ADD_INPUT",value:x})
      console.log(x)
    }
  }
}
 
export default connect(null,mapDispatchToProps) (InputSearch);