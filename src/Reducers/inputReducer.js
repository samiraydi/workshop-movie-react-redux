const InputReducer=(state='',action)=>{
  if(action.type==="ADD_INPUT"){
    return action.value
  }
  return state

}
export default InputReducer