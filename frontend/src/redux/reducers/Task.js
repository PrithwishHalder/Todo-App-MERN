import {NEW_TASK, UPDATE_TASK, DELETE_TASK, GET_TASK, GET_ALL_TASK} from '../constants';

const initialState = [];

const taskReducer = (state = initialState, action) => {
    const { type, payload } = action;
    switch (type) {
      case NEW_TASK:
        return { ...state, tasks: [...state.tasks, payload.task] };
      
      case UPDATE_TASK:
        console.log(payload);
        return { ...state, tasks: state.tasks.map(task => {
          if(task._id == payload.task._id){
            return task = payload.task;
          }else{
            return task;
          }
        }) };
      
      case DELETE_TASK:
        console.log(payload);
        return { ...state, tasks: state.tasks.filter(task => task._id !== payload.task._id) };
      
      case GET_ALL_TASK:
        return { ...state, ...payload };
  
      default:
        return state;
    }
};

export default taskReducer;