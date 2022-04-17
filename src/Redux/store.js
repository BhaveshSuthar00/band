import { createStore,compose, combineReducers, applyMiddleware } from "redux";
import {todoReducer } from './Todo/reducer'
// import thunk from 'redux-thunk'
import {countReducer} from './Counter/reducer'
const rootReducer = combineReducers({todo : todoReducer,  count : countReducer})
const FlatMiddleware = (store) => (next) => (action) => {
    // console.log("Middleware called", action)
    // console.log('store', store.getState())
    if(typeof action === "function"){
        return action (store.dispatch);
    }
    next(action)
}

export const store = createStore(rootReducer, compose(
        applyMiddleware(FlatMiddleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
);