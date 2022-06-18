import React from "react";
import "./Page.css";
//router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//components
import Tasks from "./components/Tasks/Tasks.js";
import AddTask from "./components/Tasks/AddTask.js";
import UpdateTask from "./components/Tasks/UpdateTask.js";
import TasksList from "./components/Tasks/TasksList.js";

const Page = () => {
  return (
    <div className="Page">
      <div className="sidebar">x</div>
      <div className="content">
        <div className="header"></div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Tasks />}>
              <Route exact path="" element={<TasksList />} />
              <Route path="add_task" element={<AddTask />} />
              <Route path="update_task/:id" element={<UpdateTask />} />
            </Route>
          </Routes>
        </Router>
      </div>
    </div>
  );
};

export default Page;
