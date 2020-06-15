import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import thunk from "redux-thunk";
import sequenceAction from "redux-sequence-action";

const middleWare = [thunk, sequenceAction];
const store = createStore(rootReducer, applyMiddleware(...middleWare));

export default store;
