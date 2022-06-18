import React, { useState } from "react";
//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//date formatter
import moment from "moment";
//router
import { useNavigate, useParams } from "react-router-dom";
//redux
import { useDispatch } from "react-redux";
//actions
import { updateTask, deleteTask } from "../../../actions/taskActions";

const UpdateTask = () => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  const {id} = useParams()
  console.log(id);

  const [taskDesc, setTaskDesc] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const handleTaskDescChange = (e) => {
    setTaskDesc(e.target.value);
  };
  const assigned_user = "user_4ee4cf67ad474a27988bc0afb84cf472";
  const company_id = "company_413ef22b6237417fb1fba7917f0f69e7";
  const access_token =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE2NTU1NTE2MzksIm5iZiI6MTY1NTU1MTYzOSwianRpIjoiNjUzZTViNjctMmQzZS00NGVhLThlODgtNDk4NTRkY2VlMTZjIiwiaWRlbnRpdHkiOnsibmFtZSI6IlN1bmRhciBQaWNoYWkiLCJlbWFpbCI6InNtaXRod2lsbHMxOTg5QGdtYWlsLmNvbSIsInVzZXJfaWQiOiJ1c2VyXzRlZTRjZjY3YWQ0NzRhMjc5ODhiYzBhZmI4NGNmNDcyIiwiaWNvbiI6Imh0dHA6Ly93d3cuZ3JhdmF0YXIuY29tL2F2YXRhci9jZjk0Yjc0YmQ0MWI0NjZiYjE4NWJkNGQ2NzRmMDMyYj9kZWZhdWx0PWh0dHBzJTNBJTJGJTJGczMuc2xvb3ZpLmNvbSUyRmF2YXRhci1kZWZhdWx0LWljb24ucG5nIiwiYnlfZGVmYXVsdCI6Im91dHJlYWNoIn0sImZyZXNoIjpmYWxzZSwidHlwZSI6ImFjY2VzcyJ9.kzGlUzj00ivk1Pyy0VwZObMva5kGT6hZy5nlsZ1Hdk8";

  const date = moment(startDate).format("yyyy-MM-DD");
  const time = moment(startTime).format("h:mm a");
  const isCompleted = 0;
  const x = startDate.toString();
  const time_zone = x.slice(28, 33);
  const convertTimeZone = (time_zone) => {
    let sign = time_zone.slice(0, 1);
    let hrs = time_zone.slice(1, 3);
    let min = time_zone.slice(3, 5);
    if (hrs === "12") {
      hrs = "00";
    }
    if (sign === "-") {
      hrs = parseInt(hrs, 10) + 12;
    }
    let a = Number(hrs) * 60 * 60;
    let b = Number(min) * 60;
    return a + b;
  };
  const convertTimeinSec = (time) => {
    let arr = time.slice(0, 4).split(":");
    if (arr[0] === "12") {
      arr[0] = "00";
    }
    if (time.slice(5, 7) === "pm") {
      arr[0] = parseInt(arr[0], 10) + 12;
    }
    let a = arr[0] * 60 * 60;
    let b = Number(arr[1]) * 60;
    return a + b;
  };
  const btnDelete = () => {
    dispatch(deleteTask(access_token, id, company_id));
    Navigate("/");
  };
  const btnUpdate = () => {
    const updateData = {
      task_time: convertTimeinSec(time),
      task_date: date,
      time_zone: convertTimeZone(time_zone),
      task_msg: taskDesc,
      assigned_user: assigned_user,
      is_completed: isCompleted,
    };
    dispatch(updateTask(updateData, access_token, company_id, id));
    Navigate("/");
  };
  const btnCancel = () => {
    Navigate("/");
  };
  return (
    <div>
      <div className="updateTask">
        <div className="addTaskTop">
          <span>Task Description</span>
          <div>
            <input type="text" onChange={handleTaskDescChange} />
            <img src="/assets/icons/description.png" alt="" />
          </div>
        </div>
        <div className="addTaskCenter">
          <div>
            <span>Date</span>
            <div>
              <img src="/assets/icons/calendar.png" alt="" />
              <DatePicker
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                dateFormat="yyyy/MM/d "
              />
            </div>
          </div>
          <div>
            <span>Time</span>
            <div>
              <img src="/assets/icons/clock.png" alt="" />
              <DatePicker
                selected={startTime}
                onChange={(date) => setStartTime(date)}
                showTimeSelect
                showTimeSelectOnly
                // timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
              />
            </div>
          </div>
        </div>
        <div className="addTaskBottom">
          <span>Assign User</span>
          <select>
            <option>user.name</option>
          </select>
        </div>
        <div className="updateTaskActions">
          <button onClick={btnDelete}>
            <img src="/assets/icons/bin.png" alt="" />
          </button>
          <div>
            <button onClick={btnCancel}>Cancel</button>
            <button onClick={btnUpdate}>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateTask;
