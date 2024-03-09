import { expect, describe, it } from "vitest";
import { sum } from "./modules/sum";
import { raiseByTen } from "./modules/raiseByTen";

describe("Sum Test Suite", () => {
  it("Should throw error if a is not a number", () => {
    const result = sum("c", 10);

    expect(result).toBe("A must be a number");
  });

  it("Should throw error if b is not a number", () => {
    const result = sum(10, "b");

    expect(result).toBe("B must be a number");
  });

  it("Should return the sum of two numbers", () => {
    const result = sum(10, 10);

    expect(result).toBe(20);
  });
});

describe("Raise by Ten Test Suite", () => {
  it("Should throw error if value is not a number", () => {
    const result = raiseByTen("c");

    expect(result).toBe("value must be a number");
  });

  it("Should return the sum of two numbers", () => {
    const result = raiseByTen(10);

    expect(result).toBe(10000000000);
  });
});
