import { calculateWinner } from "./calculateWinner";

describe("calculateWinner", () => {
  it("detects row win", () => {
    const squares = ["X", "X", "X", null, "O", null, "O", null, null];
    expect(calculateWinner(squares)).toEqual({ winner: "X", line: [0, 1, 2] });
  });

  it("detects col win", () => {
    const squares = ["O", null, null, "O", null, null, "O", null, null];
    expect(calculateWinner(squares)).toEqual({ winner: "O", line: [0, 3, 6] });
  });

  it("detects diagonal win", () => {
    const squares = ["X", null, null, null, "X", null, null, null, "X"];
    expect(calculateWinner(squares)).toEqual({ winner: "X", line: [0, 4, 8] });
  });

  it("returns null when no winner", () => {
    const squares = ["X", "O", "X", "X", "O", "O", "O", "X", "X"];
    expect(calculateWinner(squares)).toEqual({ winner: null, line: [] });
  });
});
