import axios from "axios";
const GET_FLAT = 'GET_FLAT';
const GET_FLAT_LOADING = 'GET_FLAT_LOADING'
const PAGING_PAGE = 'PAGING_PAGE';
const SET_STATUS = "SET_STATUS"; 
const GET_FLAT_SINGLE = 'GET_FLAT_SINGLE';
const addFlat = (flat) =>({ type : GET_FLAT, payload : flat });
const getFlatLoading = (status) =>({ type : GET_FLAT_LOADING, payload : status });
const setStatus =  (status) => ({ type : SET_STATUS, payload : status });
const pageChange =  (page) => ({ type : PAGING_PAGE, payload : page });
const singleFlat = (flat) => ({ type : GET_FLAT_SINGLE, payload : flat });
const apiCallSortby = (sortby) =>{
    return async function(dispatch){
        try {
            dispatch(getFlatLoading(true))
            let res = await axios.get(`https://sunday-server.herokuapp.com/flat/sort?sortby=${sortby}`);
            localStorage.setItem('flat', JSON.stringify(res.data.flat)) 
            let resident = res.data.resident;
            localStorage.setItem('resident', JSON.stringify(resident))
            dispatch(addFlat({flat : res.data.flat, resident : resident}))
        }
        catch (err) {
            dispatch(apiCall(1))
        }
    }
}
const apiCall = (page) => {
    return async function (dispatch){
        try {
            dispatch(getFlatLoading(true))
            let res = await axios.get(`https://sunday-server.herokuapp.com/flat/all?page=${page}&size=3`)
            localStorage.setItem('flat', JSON.stringify(res.data.flat))
            localStorage.setItem('limiter', JSON.stringify(res.data.totalPages))
            let resident = res.data.resident;
            localStorage.setItem('resident', JSON.stringify(resident))
            dispatch(addFlat({flat : res.data.flat, resident : resident}))
        }
        catch (err) {
            dispatch(apiCall(1))
            console.log(err)
        }
    }
}
const apiCallBlock = (value) => {

    return async function (dispatch){
        try {
            dispatch(getFlatLoading(true))
            let res = await axios.get(`https://sunday-server.herokuapp.com/flat/block/${value}`)
            if(res.data.resident.length > 0 || res){
                dispatch(addFlat({flat : res.data.flat, resident : res.data.resident}))
            } else {
                dispatch(pageChange({page : 1, value : "start"}))
            }
        }
        catch (err) {
            dispatch(apiCall(1))
        }
    }

}
const apiCallFlat = (id) => {
    return async function (dispatch){
        try {
            dispatch(getFlatLoading(true))
            let res = await axios.get(`https://sunday-server.herokuapp.com/resident/${id}`)
            let flat = await axios.get(`https://sunday-server.herokuapp.com/flat/${id}`)
            dispatch(singleFlat({flat : flat.data.flat, members : res.data}))
        }
        catch (err) {
            dispatch(apiCall(1))
        }
    }
}
export { addFlat, 
    pageChange,apiCallFlat,
    singleFlat, GET_FLAT_SINGLE,
    apiCallBlock, apiCallSortby,
    PAGING_PAGE, GET_FLAT, GET_FLAT_LOADING,
    getFlatLoading, apiCall,
    setStatus, SET_STATUS
}