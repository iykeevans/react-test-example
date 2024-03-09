export const raiseByTen = (value: number) => {
  if (typeof value !== "number") {
    return "value must be a number";
  }
  return Math.pow(10, value);
};
