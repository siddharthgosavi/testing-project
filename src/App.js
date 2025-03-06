import "./App.css";
import AdvanceHooks from "./components/AdvanceHooks";
import Calculator from "./components/Calculator";
import StateBatching from "./components/StateBatching";
import UseReducerExample from "./components/UseReducerExample";

function App() {
  return (
    <div className="container-lg">
      {/* <Calculator defaultA={"2"} defaultB={"17.44"} defaultOperator={"+"} /> */}
      {/* <AdvanceHooks /> */}
      {/* <StateBatching /> */}
      <UseReducerExample />
    </div>
  );
}

export default App;
