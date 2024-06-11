import "./App.css";
import { React, useState } from "react";
import LxtTaskAdd from "./components/LxtTaskAdd";
import LxtListTask from "./components/LxtListTask";

function App() {
  //mock data
  const Lxt_listTasks = [
    {
      lxt_taskId: 2210900069,
      lxt_taskName: "Lê Xuân Toàn",
      lxt_level: "Small",
    },
    {
      lxt_taskId: 1,
      lxt_taskName: "học lập trình frontend",
      lxt_level: "Small",
    },
    {
      lxt_taskId: 2,
      lxt_taskName: "học lập trình reactjs",
      lxt_level: "Medium",
    },
    {
      lxt_taskId: 3,
      lxt_taskName: "học lập trình frontend reactjs",
      lxt_level: "High",
    },
  ];
  //
  const [LxtListTask, setLxtListTask] = useState(Lxt_listTasks);
  //
  const LxtTaskObj = {
    lxt_taskId: 0,
    lxt_taskName: "",
    lxt_level: "",
  };
  //
  const [lxtTask, setLxtTask] = useState(LxtTaskObj);
  //
  const [lxtIsAddOrEdit, setLxtIsAddOrEdit] = useState(true);
  //
  const lxtHandleEdit = (param) => {
    console.log("Add - Edit:", param);
    //
    setLxtTask(param);
    //
    setLxtIsAddOrEdit(false);
  };
  const lxtHanderSubmit = (lxtParam) => {
    console.log("App:", lxtParam);
    if (lxtIsAddOrEdit === true) {
      setLxtListTask((prev) => {
        return [...prev, lxtParam];
      });
    } else {
      for (let i = 0; i < LxtListTask.length; i++) {
        if (LxtListTask[i].lxt_taskId == lxtParam.lxt_taskId) {
          LxtListTask[i] = lxtParam;
          break;
        }
      }
      //cập nhật lại state
      setLxtListTask((prev) => {
        return [...prev];
      });
    }
  };
  //
  const lxtHandleDelete = (param) => {
    let lxtResult = LxtListTask.filter((x) => x.lxt_taskId != param.lxt_taskId);
    setLxtListTask(lxtResult);
  };

  return (
    <div className="container border">
      <h1>Lê Xuân Toàn</h1>
      <hr />
      <div>
        <LxtListTask
          renderLxtListTask={LxtListTask}
          onLxtTaskEdit={lxtHandleEdit}
          onTaskDelete={lxtHandleDelete}
        />
      </div>
      <div>
        <LxtTaskAdd
          renderLxtTask={lxtTask}
          renderLxtIsAddOrEdit={lxtIsAddOrEdit}
          LxtOnSubmit={lxtHanderSubmit}
        />
      </div>
    </div>
  );
}

export default App;
