import { substract, sum, multiply, divide } from "../utils/math-functions";

describe("Math Functions", () => {
  it("sums correctly 2 values", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(2, 0)).toBe(2);
    expect(sum(0, 0)).toBe(0);
    expect(sum(0, -1)).toBe(-1);
    expect(sum(-1, -1)).toBe(-2);
    expect(sum(-1, -0.5)).toBe(-1.5);
  });
  it("substract correctly 2 values", () => {
    expect(substract(2, 1)).toBe(1);
    expect(substract(2, 0)).toBe(2);
    expect(substract(0, 0)).toBe(0);
    expect(substract(0, -1)).toBe(1);
    expect(substract(-1, -1)).toBe(0);
    expect(substract(-1.5, -0.5)).toBe(-1);
  });
  it("multiply correctly 2 values", () => {
    expect(multiply(2, 1)).toBe(2);
    expect(multiply(2, 0)).toBe(0);
    expect(multiply(0, 0)).toBe(0);
    expect(multiply(10, 2.55)).toBe(25.5);
    expect(multiply(-1, -1)).toBe(1);
    expect(multiply(-1.5, 0.5)).toBe(-0.75);
  });
  it("divide correctly 2 values", () => {
    expect(divide(2, 1)).toBe(2);
    expect(divide(6, 2)).toBe(3);
    expect(divide(10, 2.55)).toBe(3.92);
    expect(divide(-1, -1)).toBe(1);
    expect(divide(-1.5, 0.5)).toBe(-3);
  });
});
