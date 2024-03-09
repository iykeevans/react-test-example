export const sum = (a: number, b: number) => {
  if (typeof a !== "number") {
    return "A must be a number";
  }

  if (typeof b !== "number") {
    return "B must be a number";
  }
  return a + b;
};
