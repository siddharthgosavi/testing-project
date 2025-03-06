function setInitalValue(initalValue) {
  return initalValue;
}

const fetchValue = async () => {
  return await fetch(
    "https://www.random.org/integers/?num=1&min=1&max=1000&col=1&base=10&format=plain"
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      return data;
    });
};

function counterReducer(currentState, action) {
  switch (action.type) {
    case "INCREMENT":
      return currentState + 1;

    case "DECREMENT":
      return currentState - 1;

    case "CUSTOMINCREMENT":
      return currentState + action.payload;

    case "CUSTOMDECREMENT":
      return currentState - action.payload;

    case "RANDOMAPIVALUE":
      return action.payload;

    case "RESET":
      return setInitalValue(0);

    default:
      return currentState;
  }
}

export { setInitalValue, counterReducer, fetchValue };
