import { GET_TODO,GET_TODO_ERROR,GET_TODO_LOADING} from "./action";
const initState = {
    flat : [],
    loading : false,
    error : false
}
export const todoReducer = (store = initState, {type, payload}) => {
    switch (type){
        case GET_TODO : 
        return {...store, flat : payload, loading  : false, error : false};
        case GET_TODO_LOADING : 
        return {...store , loading : true}
        case GET_TODO_ERROR : 
        return {...store, loading : false, error : true}
        default :
        return store;
    }
}