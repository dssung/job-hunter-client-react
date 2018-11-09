import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App.js";
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import reducer from './rootReducer';
import {getAllMyJobs} from './myJobs/duck/actions';

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)
store.subscribe(() => console.log(store.getState()));
store.dispatch(getAllMyJobs());

ReactDOM.render(

<Provider store = {store}>
   <App />
</Provider>,

document.getElementById("root"));