import React, { Component } from 'react';
import { connect } from 'react-redux';
class StarSearch extends Component {
  state = {  }
  render() { 
    return ( <div>
    <ul style={{display:"flex",justifyContent:"space-between",listStyleType:"none"}}>
      <li onClick={()=>{this.props.star(1)}}>☆</li>
      <li onClick={()=>{this.props.star(2)}}>☆</li>
      <li onClick={()=>{this.props.star(3)}}>☆</li>
      <li onClick={()=>{this.props.star(4)}}>☆</li>
      <li onClick={()=>{this.props.star(5)}}>☆</li>
    </ul>
    </div> );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{
  star:e=>{
    dispatch({type:"ADD_STARS",value:e})
    console.log(e)
  }}
} 

export default connect(null,mapDispatchToProps) (StarSearch);