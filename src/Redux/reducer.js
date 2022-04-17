import { GET_TODO,GET_TODO_ERROR,GET_TODO_LOADING,SET_STATUS} from "./action";
const initState = {
    flat : [],
    loading : false,
    error : false,
    state : false,
}
export const flatReducer = (store = initState, {type, payload}) => {
    switch (type){
        case SET_STATUS: 
        return {...store, state : payload};
        case GET_TODO : 
        return {...store, flat : payload, loading  : false, error : false};
        case GET_TODO_LOADING : 
        return {...store , loading : payload}
        case GET_TODO_ERROR : 
        return {...store, loading : false, error : true}
        default :
        return store;
    }
}