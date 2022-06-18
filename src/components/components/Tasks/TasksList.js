import React, { useState,useEffect, useCallback } from "react";
import { getAllTasks } from "../../../actions/taskActions";
import { useDispatch, useSelector } from "react-redux";
import {useNavigate} from 'react-router-dom'
const TasksList = () => {
  const Navigate = useNavigate()
  const dispatch = useDispatch();
  const status = useSelector((state) => state.taskReducer.tasks.status);
  const tasks = useSelector((state) => state.taskReducer.tasks.results);
  const addTaskStatus = useSelector((state) => state.taskReducer.addTask.status);
  const updateTaskStatus = useSelector((state) => state.taskReducer.updateTask.status);
  const deleteTaskStatus = useSelector((state) => state.taskReducer.deleteTask.status);
  const company_id = "company_413ef22b6237417fb1fba7917f0f69e7";
  const access_token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTU1NTE2MzksIm5iZiI6MTY1NTU1MTYzOSwianRpIjoiNjUzZTViNjctMmQzZS00NGVhLThlODgtNDk4NTRkY2VlMTZjIiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.kzGlUzj00ivk1Pyy0VwZObMva5kGT6hZy5nlsZ1Hdk8";
  useEffect(() => {
    dispatch(getAllTasks(company_id,access_token))
  }, [addTaskStatus, updateTaskStatus, deleteTaskStatus]);
  const btnEdit = (id) =>{
    Navigate(`/update_task/${id}`)
  }
  return (
    <div>
      {status === "success" && (
        <div className="tasksList">
          {tasks.map((val, key) => {
            let date = val.created.slice(0, 10);
            return (
              <div className="taskItemCont" key={key}>
                <div className="taskItemLft">
                  <img src="/assets/icons/user.jpg" alt="user" />
                  <div>
                    <span>{val.task_msg}</span>
                    <span>{date}</span>
                  </div>
                </div>
                <div className="taskItemRght">
                  <button onClick={() => btnEdit(val.id)}>
                    <img src="/assets/icons/pencil.png" />
                  </button>
                  <button>
                    <img src="/assets/icons/check.png" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TasksList;
