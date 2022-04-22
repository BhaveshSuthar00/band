import { createStore, compose, applyMiddleware } from "redux";
import {flatReducer } from './reducer'
import ReduxThunk from "redux-thunk";
export const store = createStore(
    flatReducer,
    compose(
        applyMiddleware(ReduxThunk), 
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);
// console.log(store.getState())