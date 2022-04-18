import { GET_TODO,GET_TODO_ERROR,GET_TODO_LOADING,PAGING_PAGE ,SET_STATUS} from "./action";
const initState = {
    flat : [],
    loading : false,
    error : false,
    state : false,
    page : 1,
    limit : 1,
    resident : [],
}
export const flatReducer = (store = initState, {type, payload}) => {
    switch (type){
        case PAGING_PAGE : {
            let newState;
            let limit = JSON.parse(localStorage.getItem('limiter'));
            if(store.page >= limit && payload.status === 'plus') return store;
            console.log(payload.status)
            if(payload.status == 'plus') {
                newState = store.page + payload.page;
            } else {
                newState = store.page - 1;
            }
            console.log(payload, newState)
            return {...store , page : newState}
        }
        case SET_STATUS : 
        return {...store, state : payload};
        case GET_TODO : 
        return {...store, flat : payload.flat, resident : payload.resident, loading  : false, error : false};
        case GET_TODO_LOADING : 
        return {...store , loading : payload}
        case GET_TODO_ERROR : 
        return {...store, loading : false, error : true}
        default :
        return store;
    }
}