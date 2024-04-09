import logo from "./logo.svg";
import "./App.css";
import Func_LeXuanToan from "./components/Func_LeXuanToan";
import Class_LeXuanToan from "./components/Class_LeXuanToan";

function App() {
  return (
    <div className="App">
      <h1>Demo JSX</h1>
      {/*function components demo */}
      <Func_LeXuanToan />
      <Func_LeXuanToan fullName="Le Xuan Toan" age="20" />

      <Class_LeXuanToan />
      <hr/>
      <Class_LeXuanToan info="Hoc JSX" time ="11"/>
    </div>
  );
}

export default App;
