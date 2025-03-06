import { fireEvent, render, screen } from "@testing-library/react";
import Calculator from "../components/Calculator";

describe("<Calculator/>", () => {
  //   beforeEach(() => {
  //     render(<Calculator />);
  //   });
  it("has 'Calculator' displayed somewhere", () => {
    render(<Calculator />);
    // screen.debug();
    const textElement = screen.getByText("Calculator");
    screen.debug(textElement);
    expect(textElement.textContent).toBe("Calculator");
  });
  it("has a H1 tag that conatains 'Calculator'", () => {
    render(<Calculator />);
    const titleElement = screen.getByRole("heading", { level: 1 });
    screen.debug(titleElement);
    expect(titleElement.textContent).toBe("Calculator");
  });
  it("It performs 0+0 by default", () => {
    render(<Calculator />);
    const inputA = screen.getByTestId("inputA").value;
    const inputB = screen.getByTestId("inputB").value;
    const operator = screen.getByTestId("operator").value;
    const result = screen.getByTestId("result").textContent;
    console.log(inputA);
    console.log(inputB);
    console.log(operator);
    console.log(result);
    expect(inputA).toBe("0");
    expect(inputB).toBe("0");
    expect(operator).toBe("+");
    expect(result).toBe("0");
  });
  it("It uses default values correctly", () => {
    render(
      <Calculator defaultA={"12"} defaultB={"10"} defaultOperator={"+"} />
    );
    const { getValueA, getValueB, getValueOperator, getValueResult } =
      getCalculator();
    expect(getValueA()).toBe("12");
    expect(getValueB()).toBe("10");
    expect(getValueOperator()).toBe("+");
    expect(getValueResult()).toBe("22");
  });
  it("Calculates correctly when user updates input", () => {
    render(
      <Calculator defaultA={"12"} defaultB={"10"} defaultOperator={"x"} />
    );

    fireEvent.change(screen.getByTestId("inputA"), { target: { value: "3" } });
    screen.debug(screen.getByTestId("inputA"));
  });
  it("Calculates correctly when user updates input", () => {
    render(<Calculator defaultA={"2"} defaultB={"10"} defaultOperator={"x"} />);

    fireEvent.change(screen.getByTestId("inputA"), { target: { value: "3" } });
    expect(getCalculator().getValueResult()).toBe("30");
    fireEvent.change(screen.getByTestId("inputB"), { target: { value: "3" } });
    expect(getCalculator().getValueResult()).toBe("9");
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "-" },
    });
    expect(getCalculator().getValueResult()).toBe("0");
  });
  it("Displays an error when divided by 0", () => {
    render(<Calculator defaultA={"1"} defaultB={"0"} defaultOperator={"/"} />);
    expect(getCalculator().getValueResult()).toBe("You can't divide by 0");
  });
  it("Displays an error when no valid operator provided", () => {
    render(<Calculator defaultA={"1"} defaultB={"0"} defaultOperator={"/"} />);
    fireEvent.change(screen.getByTestId("operator"), {
      target: { value: "!" },
    });
    expect(getCalculator().getValueResult()).toBe("No operator provided");
  });
});

function getCalculator() {
  return {
    getValueA: () => screen.getByTestId("inputA").value,
    getValueB: () => screen.getByTestId("inputB").value,
    getValueOperator: () => screen.getByTestId("operator").value,
    getValueResult: () => screen.getByTestId("result").textContent,
  };
}
