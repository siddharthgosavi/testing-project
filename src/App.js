import "./App.css";
import AdvanceHooks from "./components/AdvanceHooks";
import Calculator from "./components/Calculator";

function App() {
  return (
    <div className="container-lg">
      {/* <Calculator defaultA={"2"} defaultB={"17.44"} defaultOperator={"+"} /> */}
      <AdvanceHooks />
    </div>
  );
}

export default App;
