import { createStore, applyMiddleware } from "redux";
import {flatReducer } from './reducer'
import ReduxThunk from "redux-thunk";
export const store = createStore(
    flatReducer,
    applyMiddleware(ReduxThunk)
);
    // compose(
    //     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    // )
// console.log(store.getState())