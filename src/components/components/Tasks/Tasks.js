import React, {useEffect} from "react";
import { Outlet, Navigate, Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../../actions/userActions";
import "../../Page.css"
const Tasks = () => {
  const dispatch = useDispatch();
  const email = 'smithwills1989@gmail.com'
  const password = '12345678'
  useEffect(() => {    
    dispatch(login(email, password));
  }, [dispatch]);
  const tasks = useSelector((state) => state.taskReducer.tasks.results);
  return (
    <div className="taskCont">
      <div className="taskTop">
        <div>
          <span>TASKS</span>
          {tasks && (<span>{tasks.length}</span>)}
        </div>
        
        <Link to="/add_task">
          +
        </Link>
      </div>
      <Outlet />
    </div>
  );
};

export default Tasks;
