import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reduxReducer from "./reduxReducer";

export default createStore(reduxReducer,applyMiddleware(thunk));