// Action 
// {type : 'ADD_COUNT", payload : 1} 
// {type : 'DEC_COUNT", payload : 1}
// {type : "RESET_COUNT"}

// Dispatch 
// dispatch(action)
//
// const reducer = (store, action )=>{
//     switch(action.type){
//         case ADD_COUNT: return {...store, count : store.count+action.payload}
//     }
// }

// Reducer : 
// your function :

// Store
//  {count : 0}


const ADD_COUNT = 'ADD_COUNT';
const SUB_COUNT = 'SUB_COUNT';
// action creators: 
const addCount = (payload) =>({type : ADD_COUNT, payload});
const subCount = (payload) =>({type : SUB_COUNT, payload});

export {addCount, subCount, ADD_COUNT, SUB_COUNT}