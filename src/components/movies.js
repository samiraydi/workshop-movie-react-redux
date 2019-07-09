import React, { Component } from 'react';
import { connect } from 'react-redux';
class Movies extends Component {
  state = {  }
  render() { 
    return (
    <div>
      {this.props.movielist.filter(el=>el.name.toUpperCase().includes(this.props.input.toUpperCase()) &&el.review<=this.props.star).map(el=>{return (
        <div>
          <img src={el.img} alt="" width="300px" height="300px"/>
          <p>{''.padEnd(el.review,'☆')}</p>
          <p>{el.name}</p>
        </div>
      )})}
    </div>
     );
  }
}
const mapStateToProps=(state)=>{
return{
  movielist:state.movie,
  star:state.star,
  input:state.input
}
}
 
export default connect(mapStateToProps,null)(Movies)