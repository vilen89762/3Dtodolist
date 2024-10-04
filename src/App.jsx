import React, { useState } from "react";
import Header from "./todo_components/Header";
import Button from "./todo_components/Button";
import "../src/App.css";

function App() {
  const [task, settask] = useState("");
  const [desc, setdesc] = useState("");
  const [arr, setarr] = useState([]);

  function ondone(e) {
    e.preventDefault();
    setarr([...arr, { task, desc }]);
    settask("");
    setdesc("");
  }

  function deleteTask(index) {
    let newarr = [...arr];
    newarr.splice(index, 1);
    setarr(newarr);
  }

  return (
    <>
      <Header text="3D Flip Card TodoList" /> {/*You can write your own text*/}
      {/*Input Section to add your task*/}
      <form onSubmit={ondone}>
        <div className="flex mt-7 justify-evenly mr-32">
          <input
            value={task}
            onChange={(e) => settask(e.target.value)}
            className="border-[3px] px-1 border-black h-10 w-1/4"
            type="text"
            placeholder="Enter your task"
          />
          <input
            value={desc}
            onChange={(e) => setdesc(e.target.value)}
            className="border-[3px] px-1 border-black h-11 w-1/3"
            type="text"
            placeholder="Enter description"
          />
          <Button text={"Add Task"} bg={"bg-black"} />
        </div>
      </form>
      {/*Main Section where task will be added*/}
      <div className="main-container">
        {arr.length === 0 ? (
          <div>
            <p className="mt-24 pl-2 text-white font-semibold pt-7 bg-gray-500 pb-7">
              No Task Available
            </p>
          </div>
        ) : (
          <div className="flip-card-container">
            {" "}
            {/* Single container for all cards */}
            {arr.map((val, index) => (
              <div key={index} className="flip-card">
                {" "}
                {/* Move flip-card out of the nested container */}
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <p className="title">Task#{index + 1}</p>
                  </div>
                  <div className="flip-card-back">
                    <p className="title">{val.task}</p>
                    <p>{val.desc}</p>
                    <Button
                      func={() => {
                        deleteTask(index);
                      }}
                      text={"Delete Task"}
                      bg={"bg-purple-600 font-semibold mt-10 ml-20"}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default App;
