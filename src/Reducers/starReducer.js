const StarReducer=(state=5,action)=>{
  if(action.type==="ADD_STARS"){
    return action.value
  }
  return state

}
export default StarReducer