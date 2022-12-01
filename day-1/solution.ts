import { input } from "./input";

const calories = input.split("\n"); // convert input to array of strings seperated by new line
let elfCalories: number[] = []; // will contain list to total calories of each elf

let elfIndex = 0; // index of elf to add calories to

for (let i = 0; i < calories.length; i++) {
  const calorie = calories[i];
  // calorie === "" means we hit a blank line in the input string
  if (calorie === "") {
    elfIndex++; // move to next elf
  }
  // Note: we are using the OR operator (||) to set the value of elfCalories[elfIndex] to 0 if it is undefined
  elfCalories[elfIndex] = Number(calorie) + (elfCalories[elfIndex] || 0);
}

// sort elfCalories in descending order
const sortedCalorieList = elfCalories.sort((a, b) => b - a);

// Part 1 output
console.log(`Highest Calorie Count: ${sortedCalorieList[0]}`);

// Part 2 output
console.log(
  `Highest 3 Total Calorie Count: ${
    sortedCalorieList[0] + sortedCalorieList[1] + sortedCalorieList[2]
  }`
);
