/*
Standard competition ranking (also known as "1224" ranking) assigns the same rank to matching values. Rank numbers are increased each time, so ranks are sometimes skipped. If we have 5 scores (the highest score having a rank of 1):

No matching values:

Scores = [99, 98, 97, 96, 95]
Rank = 1,  2,  3,  4,  5
With matching values:

Scores = [99, 98, 98, 96, 95]
Rank = 1,  2,  2,  4,  5

// Second and third scores are equal, so rank "3" is skipped.
Given an object containing the names and scores of 5 competitors, and a competitor name, return the rank of that competitor after applying competition ranking.

Examples
competition_rank({
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
  }, "Jane") ➞ 4

competition_rank({
  Kate: 92,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 84
  }, "Bruce") ➞ 3
Notes The highest score has a rank value of 1.
*/


/*
- mental model 
  - convert input to an array of sub arrays
  - init rank to 1;
  - if the first name is equal to the input name return rank 
  - iterate through the array of people sub array starting at the second person 
  - if the second person score is not the same to the assing the rank to the current index + 1
  - if the name is the same as in the input name return the rank
    
*/

function competition_rank(ranks, name) {
  const ranksArr = Object.entries(ranks);
  let rank = 1;
  if (ranksArr[0][0] === name) return rank;
  for (let i = 1; i < ranksArr.length; i += 1) {
    if (ranksArr[i - 1][1] !== ranksArr[i][1]) rank = i + 1;
    if (ranksArr[i][0] === name) return rank;
  }
};
console.log(competition_rank({
  George: 96,
  Emily: 95,
  Susan: 93,
  Jane: 89,
  Brett: 82
  }, "Jane"))// ➞ 4

console.log(competition_rank({
  Kate: 92,
  Carol: 92,
  Jess: 87,
  Bruce: 87,
  Scott: 84
  }, "Bruce"))// ➞ 3
