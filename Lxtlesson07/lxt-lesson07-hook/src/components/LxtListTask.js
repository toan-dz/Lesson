import React from "react";

export default function LxtListTask(
  renderLxtListTask,
  onLxtTaskEdit,
  onTaskDelete
) {
  console.log(renderLxtListTask);
  //ham xu ly
  const lxtHandleEdit = (param) => {
    console.log("Click edit:", param);
    onLxtTaskEdit(param); //
  };
  //xoa
  const lxtHandleDelete = (param) => {
    if (window.confim("bạn có chắc chắn xóa không")) {
      onTaskDelete(param);
    }
  };

  //render data
  let lxtElmentTask = renderLxtListTask.map((task, is, index) => {
    return (
      <>
        <tr key={index}>
          <td>{index + 1} </td>
          <td>{index.lxt_taskId} </td>
          <td>{index.lxt_taskName} </td>
          <td>{index.lxt_level} </td>
          <td>
            <button
              className="btn btn-success"
              onClick={() => lxtHandleEdit(task)}
            >
              Edit
            </button>
            <button
              className="btn btn-danger"
              onClick={() => lxtHandleDelete(task)}
            >
              {" "}
              Remove
            </button>
          </td>
        </tr>
      </>
    );
  });
  return (
    <div>
      <h2>danh sách các nhiệm vụ</h2>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th>STT</th>
            <th>Task ID</th>
            <th>Task Name</th>
            <th>Task Level</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{lxtElmentTask}</tbody>
      </table>
    </div>
  );
}
