import reducer from './reducers/rootReducer.jsx'
import { reduxFirestore, getFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import fbConfig from "../config/fbConfig.js";
import { createStore, applyMiddleware, compose } from 'redux';


// create store with middleware
const middleWares = [thunk.withExtraArgument(getFirestore)];
const enhancers = [applyMiddleware(...middleWares), reduxFirestore(fbConfig)];


const initialState = {}

export default () => {
  return createStore(
    reducer,
    initialState,
    compose(...enhancers)
    // applyMiddleware(...middleware) // to add other middleware
  )
}