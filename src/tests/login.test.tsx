import { test, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "../views/Login";

test("Test Login.tsx renders properly", () => {
  render(<Login />);
});

test("Test Login.tsx has email field", () => {
  // ARRANGE
  render(<Login />);

  // ASSERT
  expect(screen.getByLabelText("Email:")).toBeTruthy();
});

test("Test Login.tsx has password field", () => {
  render(<Login />);

  // ASSERT
  expect(screen.getByLabelText("Password:")).toBeTruthy();
});

test("Test Login.tsx has typed email on screen", async () => {
  render(<Login />);

  const emailInput = screen.getByLabelText(/Email:/i);
  await fireEvent.change(emailInput, {
    target: { value: "elochi238@gmail.com" },
  });

  // ASSERT
  expect(screen.getByText("elochi238@gmail.com")).toBeTruthy();
});
