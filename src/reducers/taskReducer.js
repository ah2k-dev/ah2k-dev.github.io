import {
  ADDTASK_FAIL,
  ADDTASK_SUCCESS,
  GETALLTASKS_FAIL,
  GETALLTASKS_SUCCESS,
  UPDATETASK_FAIL,
  UPDATETASK_SUCCESS,
  DELETETASK_FAIL,
  DELETETASK_SUCCESS,
} from "../constants/taskConstants";
export const taskReducer = (
  state = { tasks: {}, addTask: {}, updateTask: {}, deleteTask: {} },
  action
) => {
  switch (action.type) {
    case GETALLTASKS_SUCCESS:
      return {
        ...state,
        tasks: action.payload,
        addTask: {
          status: "noSuc",
        },
        updateTask: {
          status: "noSuc",
        },
        deleteTask: {
          status: "noSuc",
        },
      };
    case GETALLTASKS_FAIL:
      return {
        ...state,
        tasks: null,
      };
    case ADDTASK_FAIL:
    case UPDATETASK_FAIL:
    case DELETETASK_FAIL:
      return {
        ...state,
      };
    case ADDTASK_SUCCESS:
      return {
        ...state,
        addTask: action.payload.data,
      };
    case UPDATETASK_SUCCESS:
      return {
        ...state,
        updateTask: action.payload.data,
      };
    case DELETETASK_SUCCESS:
      return {
        ...state,
        deleteTask: action.payload.data,
      };
    default:
      return state;
  }
};
