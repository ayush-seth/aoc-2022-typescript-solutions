import {
  OppMove,
  MyMove,
  RoundResult,
  winMove,
  drawMove,
  loseMove,
  moveScore,
  result,
} from "./helperDictonaries";
import { input } from "./input";

// function to get the result of a round, given both moves
function getRoundResult(oppMove: OppMove, myMove: MyMove) {
  switch (oppMove) {
    case "A": // Rock
      if (myMove === "X") return "Draw"; // Rock
      else if (myMove === "Y") return "Won"; // Paper
      else return "Lost"; // Scissors
    case "B": // Paper
      if (myMove === "X") return "Lost"; // Rock
      else if (myMove === "Y") return "Draw"; // Paper
      else return "Won"; // Scissors
    case "C": // Scissors
      if (myMove === "X") return "Won"; // Rock
      else if (myMove === "Y") return "Lost"; // Paper
      else return "Draw"; // Scissors
  }
}

// function to get the correct move to play, given the opponent's move and the wanted result
function getMyMove(oppMove: OppMove, result: RoundResult): MyMove {
  switch (result) {
    case "Won":
      return winMove[oppMove];
    case "Draw":
      return drawMove[oppMove];
    case "Lost":
      return loseMove[oppMove];
  }
}

// function to get the score of a round, given both moves
function getScore(oppMove: OppMove, myMove: MyMove) {
  const result = getRoundResult(oppMove, myMove);
  const score = moveScore[myMove];
  switch (result) {
    case "Won":
      return 6 + score;
    case "Draw":
      return 3 + score;
    case "Lost":
      return 0 + score;
  }
}

let myScoreA = 0; // score for part 1 of the challenge
let myScoreB = 0; // score for part 2 of the challenge

const rounds = input.split("\n"); // split the input into rounds

// loop through all rounds
for (let i = 0; i < rounds.length; i++) {
  const round = rounds[i];
  const moves = round.split(" "); // split the round into moves
  const oppMove = moves[0] as OppMove;
  const myMove = moves[1] as MyMove;
  myScoreA += getScore(oppMove, myMove);
  myScoreB += getScore(oppMove, getMyMove(oppMove, result[myMove]));
}

console.log(`Score 1: ${myScoreA}`);
console.log(`Score 2: ${myScoreB}`);
