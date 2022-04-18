import { createStore } from "redux";
import {flatReducer } from './reducer'
export const store = createStore(flatReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
// console.log(store.getState())