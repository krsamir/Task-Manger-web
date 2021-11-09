import React, { useState, useEffect } from "react";
import { Snackbar } from "@mui/material";
import axios from "axios";
import "./style.css";
const Home = () => {
  // useEffect(() => {
  //   axios
  //     .get("/api/tasks")
  //     .then((val) => {
  //       console.log(val.data);
  //     })
  //     .catch((e) => {
  //       console.log(e);
  //     });
  // }, []);
  const [task, setTask] = useState([{ name: "", subtasks: [{ task: "" }] }]);
  const [open, setOpen] = useState(false);
  const [message, setmessage] = useState("");

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  const addTask = () => {
    const val = [...task];
    console.log(val);
    val.push({ name: "", subtasks: [{ task: "" }] });
    setTask(val);
  };
  const handleChange = (e, index, ind) => {
    const val = [...task];
    val[index].subtasks[ind].task = e.target.value;
    setTask(val);
  };
  const RemoveTask = (i) => {
    const val = [...task];
    val.splice(i, 1);
    setTask(val);
  };
  const saveTask = () => {
    console.log(task);
    // handleClick();
    // axios
    //   .post("/api/tasks", task)
    //   .then((val) => {
    //     console.log(val.data);
    //     setmessage(val.data.message);
    //     setTask([{ name: "" }]);
    //   })
    //   .catch((e) => {
    //     console.log(e);
    // });
  };
  const addSubTask = (index) => {
    console.log(index);
    const val = [...task];
    val[index].subtasks.push({ task: "" });
    setTask(val);
  };
  const removeSubTask = (index, subIndex) => {
    console.log(index);
    const val = [...task];
    val[index].subtasks.splice(subIndex, 1);
    setTask(val);
  };
  const handleTitleChange = (e, index) => {
    const val = [...task];
    val[index].name = e.target.value;
    setTask(val);
  };
  return (
    <div>
      <div className="task">
        Create Topics{" "}
        <span>
          <button className="addTask" onClick={addTask}>
            Add Topic
          </button>
        </span>
        <span>
          <button className="addTask" onClick={saveTask}>
            Save
          </button>
        </span>
        <div className="tasks">
          {task.map((_, i) => (
            <div key={i}>
              <input
                type="text"
                className="input-elem"
                placeholder="Title"
                value={_.name}
                onChange={(e) => handleTitleChange(e, i)}
              />
              <span>
                <button className="addTask" onClick={() => addSubTask(i)}>
                  +
                </button>
                <button className="addTask" onClick={() => RemoveTask(i)}>
                  x
                </button>
              </span>
              {_.subtasks.map((val, ind) => {
                return (
                  <div key={ind} className="sub-task-block">
                    <input
                      type="text"
                      className="input-elem"
                      value={val.task}
                      onChange={(e) => handleChange(e, i, ind)}
                    />
                    <button
                      className="remove"
                      onClick={() => {
                        removeSubTask(i, ind);
                      }}
                    >
                      -
                    </button>
                  </div>
                );
              })}
              <hr />
            </div>
          ))}
        </div>
      </div>
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        message={message}
      />
    </div>
  );
};

export default Home;
