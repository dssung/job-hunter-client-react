import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App.js";
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './rootReducer';
import {getMyJobs} from './myJobs/duck/actions';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
store.subscribe(() => {});
store.dispatch(getMyJobs());


ReactDOM.render(

<Provider store = {store}>
   <App />
</Provider>,

document.getElementById("root"));