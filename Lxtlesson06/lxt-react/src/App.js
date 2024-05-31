import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import LxtTaskAdd from "./components/LxtTaskAdd";

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
  const [LxtListTask, setLxtListTask] = useState(Lxt_listTasks);
  const lxtHanderSubmit = (lxtParam) => {
    console.log("App:", lxtParam);
    setLxtListTask((prev) => {
      return [...prev, lxtParam];
    });
  };
  return (
    <div className="container border">
      <h1>Lê Xuân Toàn</h1>
      <hr />
      <div>
        <LxtListTask renderLxtListTask={LxtListTask} />
      </div>
      <div>
        <LxtTaskAdd LxtOnSubmit={lxtHanderSubmit} />
      </div>
    </div>
  );
}

export default App;
