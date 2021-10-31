import { applyMiddleware, createStore } from "redux";
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import profileReducer from './../reducers/profileReducer';

const reducers = combineReducers({
  profile: profileReducer
})

const store = createStore(reducers, applyMiddleware(thunk))
window.store = store 
export default store