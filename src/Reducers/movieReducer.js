const MovieReducer=(state=[
  { name: 'Avengers: Endgame', img: 'https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg', review: '4' }, 
  { name: 'John Wick 3: Parabellum', img: 'https://image.tmdb.org/t/p/w185/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg', review: '3' },
  { name: 'Breakthrough 2019', img: 'https://egybest.video/uploads/articles/c08520bc.png', review: '2' }]
  ,action)=>{
  if(action.type==="ADD_MOVIE"){
    return [...state,action.value]
  }
  return state

}
export default MovieReducer