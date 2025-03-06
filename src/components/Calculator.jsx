import React, { useState } from "react";
import { divide, multiply, substract, sum } from "../utils/math-functions";

const OPERATORS = ["+", "-", "x", "/"];
const Calculator = ({ defaultA, defaultB, defaultOperator }) => {
  const [inputValueA, setInputValueA] = useState(
    !defaultA || isNaN(defaultA) ? 0 : defaultA
  );
  const [inputValueB, setInputValueB] = useState(
    !defaultB || isNaN(defaultB) ? 0 : defaultB
  );
  const [operator, setOperator] = useState(
    OPERATORS.includes(defaultOperator) ? defaultOperator : "+"
  );

  const RenderInputA = () => {
    return (
      <input
        data-testid="inputA"
        className="form-input"
        type={"number"}
        value={inputValueA}
        onChange={(e) => {
          setInputValueA(parseFloat(e.target.value));
        }}
      />
    );
  };

  const RenderInputB = () => {
    return (
      <input
        data-testid="inputB"
        className="form-input"
        value={inputValueB}
        type={"number"}
        onChange={(e) => {
          setInputValueB(parseFloat(e.target.value));
        }}
      />
    );
  };

  const RenderSelectBox = () => {
    return (
      <div>
        <select
          data-testid="operator"
          value={operator}
          className="form-select"
          onChange={(e) => setOperator(e.target.value)}
        >
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="x">*</option>
          <option value="/">/</option>
        </select>
      </div>
    );
  };

  const getResult = () => {
    switch (operator) {
      case "+":
        return sum(inputValueA, inputValueB);
      case "-":
        return substract(inputValueA, inputValueB);
      case "x":
        return multiply(inputValueA, inputValueB);
      case "/":
        try {
          return divide(inputValueA, inputValueB);
        } catch (error) {
          return error.message;
        }
      default:
        return "No operator provided"
    }
  };

  return (
    <div className="container">
      <h1 className="title">Calculator</h1>
      <RenderInputA />
      <RenderSelectBox />
      <RenderInputB />
      <div>
        <h2 style={{ marginTop: "10px", marginBottom: "0px" }}>Result</h2>
        <p data-testid="result" style={{ textAlign: "center", margin: "0px" }}>
          {getResult()}
        </p>
      </div>
    </div>
  );
};

export default Calculator;
