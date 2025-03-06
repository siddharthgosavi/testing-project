export function sum(a = 0, b = 0) {
  return Number.parseFloat(a) + Number.parseFloat(b);
}
export function substract(a = 0, b = 0) {
  return Number.parseFloat(a - b);
}
export function multiply(a = 0, b = 0) {
  return Number.parseFloat((a * b).toFixed(2));
}
export function divide(a = 0, b = 0) {
  if (Number.parseFloat(b) !== 0) {
    return Number.parseFloat((a / b).toFixed(2));
  } else {
    throw new Error("You can't divide by 0");
  }
}
