import React, {
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import Hello from "./Hello";

const AdvanceHooks = () => {
  const cardCodeInputRef = useRef(0);
  const cardExpiryDateRef = useRef(0);

  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState(1);

  const handleCardCodeChange = (e) => {
    if (e.target.value.length >= 3) {
      cardExpiryDateRef.current.focus();
    }
  };
  const handleCardNumberChange = (e) => {
    if (e.target.value.length >= 12) {
      cardCodeInputRef.current.focus();
    }
  };

  //   useEffect(() => {
  //     console.log(cardCodeInputRef.current);
  //   }, []);

  const increaseCounter = () => {
    setCounter(counter + 1);
  };
  const increaseValue = () => {
    setValue(value + 1);
  };

  const heavyCalculation = (value) => {
    console.log("heavyCalculation()");
    let newResult = 0;
    for (let i = 0; i < 1000; i++) {
      console.log("geavyCalculation loop");
      newResult += 1 * value;
    }
    return newResult;
  };

  const result = useMemo(() => heavyCalculation(value), [value]);

  //memoise function
  const onClickHello = useMemo(() => {
    return () => {
      console.log("Clicked on Hello!");
    };
  }, []);

  //memoise function using useCallback
  const onClickHello1 = useCallback(() => {
    console.log("Clicked on Hello!");
  }, []);

  return (
    <>
      <div className="">
        <label>Credit Card Number</label>
        <input
          min={1}
          max={12}
          onChange={(e) => handleCardNumberChange(e)}
          type="number"
          className="form-control mb-2 mr-sm-2"
          placeholder="1234 5678 9012"
          name="creditCardNumber"
        />
      </div>
      <div className="">
        <label>Secret Code</label>
        <input
          min={1}
          max={3}
          ref={cardCodeInputRef}
          onChange={(e) => handleCardCodeChange(e)}
          type="number"
          className="form-control mb-2 mr-sm-2"
          placeholder="123"
          name="creditCardCode"
        />
      </div>
      <div className="">
        <label>Expiration Date</label>
        <input
          ref={cardExpiryDateRef}
          type="date"
          className="form-control mb-2 mr-sm-2"
          placeholder="Jane Doe"
          name="creditExpiryDate"
        />
      </div>
      <div className="d-flex flex-column center-block w-full p-2">
        <button onClick={increaseCounter} className="btn btn-primary mx-auto">
          Increament Counter
        </button>
        <p className=" mx-auto">Counter : {counter}</p>
        <button onClick={increaseValue} className="btn btn-primary mx-auto">
          Increament Value
        </button>
        <p className=" mx-auto">Result : {result}</p>
      </div>
      <div className="d-flex flex-column center-block w-full p-2">
        <Hello onClick={onClickHello1} />
      </div>
    </>
  );
};

export default AdvanceHooks;
