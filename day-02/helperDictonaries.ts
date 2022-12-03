export type OppMove = "A" | "B" | "C";
export type MyMove = "X" | "Y" | "Z";
export type RoundResult = "Won" | "Draw" | "Lost";

// score for playing each move (X, Y, Z) -> (Rock, Paper, Scissors)
export const moveScore = {
  X: 1,
  Y: 2,
  Z: 3,
};

// move to play when you want to win
export const winMove: Record<OppMove, MyMove> = {
  A: "Y",
  B: "Z",
  C: "X",
};

// move to play when you want to draw
export const drawMove: Record<OppMove, MyMove> = {
  A: "X",
  B: "Y",
  C: "Z",
};

// move to play when you want to lose
export const loseMove: Record<OppMove, MyMove> = {
  A: "Z",
  B: "X",
  C: "Y",
};

// for Round 2 of the challenge, (X, Y, Z) -> (Lost, Draw, Won)
export const result: Record<MyMove, RoundResult> = {
  X: "Lost",
  Y: "Draw",
  Z: "Won",
};
