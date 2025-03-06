import React, { useReducer, useState } from "react";
import { counterReducer, fetchValue, setInitalValue } from "./counter-reducer";

const UseReducerExample = () => {
  //   const [counter, setCounter] = useState(0);
  const [counter, dispatchCounter] = useReducer(
    counterReducer,
    0,
    setInitalValue
  );
  return (
    <div>
      <h1 className="title">UseReducerExample</h1>
      <h2>Counter : {counter}</h2>
      <div className="d-flex flex-column ">
        <button
          onClick={() => dispatchCounter({ type: "INCREMENT" })}
          className="btn btn-outline-primary mt-2"
        >
          Increment
        </button>
        <button
          onClick={() => dispatchCounter({ type: "DECREMENT" })}
          className="btn btn-outline-primary mt-2"
        >
          Decrement
        </button>
        <button
          onClick={() =>
            dispatchCounter({ type: "CUSTOMINCREMENT", payload: 3 })
          }
          className="btn btn-outline-primary mt-2"
        >
          Increment by 3
        </button>
        <button
          onClick={() =>
            dispatchCounter({ type: "CUSTOMDECREMENT", payload: 3 })
          }
          className="btn btn-outline-primary mt-2"
        >
          Decrement by 3
        </button>
        <button
          onClick={() =>
            dispatchCounter({ type: "CUSTOMINCREMENT", payload: 6 })
          }
          className="btn btn-outline-primary mt-2"
        >
          Increment by 6
        </button>
        <button
          onClick={() =>
            dispatchCounter({ type: "CUSTOMDECREMENT", payload: 6 })
          }
          className="btn btn-outline-primary mt-2"
        >
          Decrement by 6
        </button>
        <button
          onClick={async () =>
            dispatchCounter({
              type: "RANDOMAPIVALUE",
              payload: await fetchValue(),
            })
          }
          className="btn btn-outline-primary mt-2"
        >
          Set Random Value from API
        </button>
        <button
          onClick={() => dispatchCounter({ type: "RESET" })}
          className="btn btn-outline-secondary mt-2"
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default UseReducerExample;
