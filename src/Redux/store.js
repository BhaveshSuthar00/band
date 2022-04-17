import { createStore,compose, applyMiddleware } from "redux";
import {todoReducer } from './Todo/reducer'
const FlatMiddleware = (store) => (next) => (action) => {
    // console.log("Middleware called", action)
    // console.log('store', store.getState())
    if(typeof action === "function"){
        return action (store.dispatch);
    }
    next(action)
}

export const store = createStore(todoReducer, compose(
        applyMiddleware(FlatMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);