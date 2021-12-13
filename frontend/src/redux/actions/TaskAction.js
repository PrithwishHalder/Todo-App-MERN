import axios from 'axios';

import {NEW_TASK, UPDATE_TASK, DELETE_TASK,  GET_ALL_TASK} from '../constants';

// export const getTask = () => async (dispatch) => {
//       try {
//         const {data} = await axios({
//           method: "GET",
//           url: `http://127.0.0.1:5000/api/task/complete/`,
//         });
//         console.log(data);
//         dispatch({
//           type: GET_TASK,
//           payload: data,
//         });
//       } catch (error) {
//         console.log(error);
//       }
// };

export const updateTask = (formData) => async (dispatch) => {
  try {
    const {_id} = formData;
    const {data} = await axios.patch(`http://127.0.0.1:5000/api/task/${_id}`, formData);

    dispatch({
      type: UPDATE_TASK,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const completeTask = (id) => async (dispatch) => {
      try {
        const {data} = await axios.patch(`http://127.0.0.1:5000/api/task/complete/${id}`);
        dispatch({
          type: UPDATE_TASK,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
};
export const deleteTask = (id) => async (dispatch) => {
      try {
        const {data} = await axios.delete(`http://127.0.0.1:5000/api/task/${id}`);
        dispatch({
          type: DELETE_TASK,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
};

export const newTask = (formData) => async (dispatch) => {
      try {
        const {data} = await axios.post(`http://127.0.0.1:5000/api/task/`, formData);

        dispatch({
          type: NEW_TASK,
          payload: data,
        });
      } catch (error) {
        console.log(error);
      }
};

export const getAllTask = () => async (dispatch) => {
  try {
    const {data} = await axios.get(`http://127.0.0.1:5000/api/task/`);

    dispatch({
      type: GET_ALL_TASK,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};