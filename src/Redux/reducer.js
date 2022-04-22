import { GET_FLAT,GET_FLAT_LOADING,GET_FLAT_SINGLE,PAGING_PAGE ,SET_STATUS} from "./action";
const initState = {
    flat : [],
    loading : false,
    state : false,
    page : 1,
    limit : 1,
    resident : [],
    singleFlat : {},
    members : []
}
export const flatReducer = (store = initState, {type, payload}) => {
    switch (type){
        case GET_FLAT_SINGLE : 
        return {...store, members : payload.members, singleFlat : payload.flat, loading  : false}
        case PAGING_PAGE : {
            let newState;
            let limit = JSON.parse(localStorage.getItem('limiter'));
            if(payload.status === 'plus' && store.page < limit) {
                newState = store.page + payload.page;
            } else if(payload.status === 'minus' && store.page > 1) {
                newState = Math.abs(store.page - payload.page);
            } else if(payload.status === 'start') {
                newState = 1;
            } else {
                newState = store.page;
            }
            return {...store , page : newState}
        }
        case SET_STATUS : 
        return {...store, state : payload};
        case GET_FLAT : 
        return {...store, flat : payload.flat, resident : payload.resident, loading  : false};
        case GET_FLAT_LOADING : 
        return {...store , loading : payload}
        default :
        return store;
    }
}