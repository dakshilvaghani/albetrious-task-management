
import axios from "axios";

const API_URL = "http://localhost:5000/api/tasks"; 

export const fetchTasks = () => async (dispatch) => {
  dispatch({ type: "FETCH_TASKS_REQUEST" });
  try {
    const response = await axios.get(API_URL);
    dispatch({ type: "FETCH_TASKS_SUCCESS", payload: response.data.tasks });
  } catch (error) {
    dispatch({ type: "FETCH_TASKS_FAILURE", payload: error.message });
  }
};

export const createTask = (taskData) => async (dispatch) => {
  try {
    const response = await axios.post(API_URL + "/create", taskData);
    dispatch({ type: "CREATE_TASK", payload: response.data.task });
  } catch (error) {
    console.error(error);
  }
};

export const updateTask = (id, taskData) => async (dispatch) => {
  try {
    const response = await axios.put(`${API_URL}/update/${id}`, taskData);
    dispatch({ type: "UPDATE_TASK", payload: response.data.task });
  } catch (error) {
    console.error(error);
  }
};

export const deleteTask = (id) => async (dispatch) => {
  try {
    await axios.delete(`${API_URL}/delete/${id}`);
    dispatch({ type: "DELETE_TASK", payload: id });
  } catch (error) {
    console.error(error);
  }
};

export const filterTasksByDate = (date) => async (dispatch) => {
  try {
    const response = await axios.get(`${API_URL}/filter?date=${date}`);
    dispatch({ type: "FETCH_TASKS_SUCCESS", payload: response.data.tasks });
  } catch (error) {
    dispatch({ type: "FETCH_TASKS_FAILURE", payload: error.message });
  }
};
