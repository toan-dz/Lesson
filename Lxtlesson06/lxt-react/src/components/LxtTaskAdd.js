import React, { useState } from "react";

export default function LxtTaskAdd({ LxtOnSubmit }) {
  const LxtTaskObj = {
    lxt_taskId: 0,
    lxt_taskName: "",
    lxt_level: "",
  };
  const [LxTask, setLxtTask] = useState();
  const lxtHanderchange = (lxtEvent) => {
    let name = lxtEvent.target.name;
    let value = lxtEvent.target.value;
    setLxtTask((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const lxtHanderSubmit = (lxtEvent) => {
    lxtEvent.preventDefault();
    LxtOnSubmit(LxTask)
  };
  return (
    <div>
      <h2>Thêm mới task</h2>
      <from>
        <div>
          <label>Task ID</label>
          <input
            name="lxt_taskId"
            value={LxTask.lxt_taskId}
            onChange={"lxtHanderchange"}
          />
        </div>
        <div>
          <label>Task Name</label>
          <input
            name="lxt_taskName"
            value={LxTask.lxt_taskName}
            onChange={"lxtHanderchange"}
          />
        </div>
        <div>
          <label>Task Level</label>
          <select
            name="lxt_level"
            value={LxTask.lxt_level}
            onChange={"lxtHanderchange"}
          >
            <option value={"Small"}>Small</option>
            <option value={"Medium"}>Medium</option>
            <option value={"High"}>High</option>
          </select>
        </div>
        <button onClick={lxtHanderSubmit}>Ghi Lại</button>
      </from>
    </div>
  );
}
