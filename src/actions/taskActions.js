import {
  GETALLTASKS_FAIL,
  GETALLTASKS_SUCCESS,
  ADDTASK_FAIL,
  ADDTASK_SUCCESS,
  UPDATETASK_FAIL,
  UPDATETASK_SUCCESS,
  DELETETASK_FAIL,
  DELETETASK_SUCCESS,
} from "../constants/taskConstants";
import axios from "axios";
import { useNavigate } from "react-router-dom";

//get all tasks
export const getAllTasks = (company_id, access_token) => async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.get(
      `https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${company_id}`,
      config
    );
    // console.log(data);
    dispatch({ type: GETALLTASKS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: GETALLTASKS_FAIL,
      payload: { error: "Error getting tasks" },
    });
  }
};

//add task
export const addTask = (data, access_token, company_id) => async (dispatch) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${access_token}`,
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };
    console.log(data);
    const x = await axios.post(
      `https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691?company_id=${company_id}`,
      data,
      config
    );
    dispatch({
      type: ADDTASK_SUCCESS,
      payload: x,
    });
  } catch (error) {
    console.log(error);
    dispatch({ type: ADDTASK_FAIL, payload: { error: "Add Task error" } });
  }
};

//Update task
export const updateTask =
  (data, access_token, company_id, task_id) => async (dispatch) => {
    try {
      const config = {
        headers: {
          Authorization: `Bearer ${access_token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const x = await axios.put(
        `https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task_id}?company_id=${company_id}`,
        data,
        config
      );
      dispatch({
        type: UPDATETASK_SUCCESS,
        payload: x,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: UPDATETASK_FAIL,
        payload: { error: "Update task error" },
      });
    }
  };

//Delete task
export const deleteTask =
  (access_token, task_id, company_id) => async (dispatch) => {
    try {
      console.log("del");
      const config = {
        headers: {
          Authorization: `Bearer ${access_token}`,
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      };
      const x = await axios.delete(
        `https://stage.api.sloovi.com/task/lead_465c14d0e99e4972b6b21ffecf3dd691/${task_id}?company_id=${company_id}`,
        config
      );
      dispatch({ type: DELETETASK_SUCCESS, payload: x });
    } catch (error) {
      dispatch({
        type: DELETETASK_FAIL,
        payload: { error: "Update task error" },
      });
    }
  };
