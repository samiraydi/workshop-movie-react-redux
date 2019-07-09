import React, { Component } from 'react';
import { connect } from 'react-redux';
class AddMovie extends Component {
constructor(props){
  super(props)
  this.state=({
  name:"",
  review:0,
  img:""
  })
}
  render() { 
  
    return ( <div style={{display:"flex",flexDirection:"column",alignItems:"center"}}>
      <input placeholder="name" onChange={(e)=>{
        this.setState({
          name:e.target.value
        })
      }} type="text"/>
      <input placeholder="review" onChange={(e)=>{
        this.setState({
          review:e.target.value
        })
      }} type="text"/>
      <input placeholder="img" onChange={(e)=>{
        this.setState({
          img:e.target.value
        })
      }} type="text"/>
      <span onClick={
        ()=>{this.props.add(this.state.name,this.state.review,this.state.img)}
      }>Add</span>
    </div> );
  }
}
const mapDispatchToProps=(dispatch)=>{
  return{ add:(x,y,z)=>{
    let obj={name:x,review:y,img:z}
    dispatch({type:"ADD_MOVIE",value:obj})
  }}
 
}
 
export default connect(null,mapDispatchToProps) (AddMovie);