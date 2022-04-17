import axios from "axios";
const GET_TODO = 'GET_TODO';
const GET_TODO_LOADING = 'GET_TODO_LOADING'
const GET_TODO_ERROR = 'GET_TODO_ERROR'
const addFlat = (todo) =>({type : GET_TODO, payload : todo});
const getTodoLoading = () =>({type : GET_TODO_LOADING});
const getTodoError = () =>({type : GET_TODO_ERROR});
const getFlatData = () => (dispatch) => {
    dispatch(getTodoLoading())
    axios.get('https://sunday-server.herokuapp.com/flat/all')
    .then((res)=>{
        dispatch(addTodo(res.data.flat))
    }).catch(() => {
        dispatch(getTodoError())
    })
}

export { addFlat,getFlatData, GET_TODO, GET_TODO_ERROR,GET_TODO_LOADING,getTodoLoading, getTodoError}