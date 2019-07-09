import {createStore,combineReducers} from "redux"
import InputReducer from "./Reducers/inputReducer";
import StarReducer from "./Reducers/starReducer";
import MovieReducer from "./Reducers/movieReducer";
     const Store=createStore(combineReducers({
input:InputReducer,
star:StarReducer,
movie:MovieReducer
     }))
     export default Store