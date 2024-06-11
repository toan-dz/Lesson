import React, { useEffect, useState } from "react";

export default function LxtTaskAdd({
  renderLxtTask,
  LxtOnSubmit,
  renderLxtIsAddOrEdit,
}) {
  const [LxTask, setLxtTask] = useState(renderLxtTask);

  useEffect(() => {
    setLxtTask(renderLxtTask);
  }, [renderLxtTask]);

  const lxtTieuDe = renderLxtIsAddOrEdit
    ? "Thêm mới task"
    : "Sửa thông tin task";

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
    LxtOnSubmit(LxTask);
  };

  return (
    <div>
      <h2>{lxtTieuDe}</h2>
      <form>
        <div className="input-group- mb-3">
          <span className="input-group- mb-3" id="basic-addon1">
            Task ID
          </span>

          <input
            type="text"
            name="lxt_taskId"
            value={LxTask.lxt_taskId}
            onChange={lxtHanderchange}
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div>
          <span className="input-group- mb-3" id="basic-addon1">
            Task Name
          </span>

          <input
            name="lxt_taskName"
            value={LxTask.lxt_taskName}
            onChange={lxtHanderchange}
            className="form-control"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
        <div>
          <label>Task Level</label>
          <select
            name="lxt_level"
            value={LxTask.lxt_level}
            onChange={lxtHanderchange}
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="High">High</option>
          </select>
        </div>
        <button onClick={lxtHanderSubmit}>Ghi Lại</button>
      </form>
    </div>
  );
}
