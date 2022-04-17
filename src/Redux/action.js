const GET_TODO = 'GET_TODO';
const GET_TODO_LOADING = 'GET_TODO_LOADING'
const GET_TODO_ERROR = 'GET_TODO_ERROR'
const SET_STATUS = "SET_STATUS"; 
const addFlat = (flat) =>({type : GET_TODO, payload : flat});
const getFlatLoading = (status) =>({type : GET_TODO_LOADING, payload : status});
const getFlatError = () =>({type : GET_TODO_ERROR});
const setStatus =  (status) => ({type : SET_STATUS, payload : status })
export { addFlat, GET_TODO, GET_TODO_ERROR,GET_TODO_LOADING,getFlatError, getFlatLoading, setStatus, SET_STATUS}