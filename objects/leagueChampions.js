/*
Create a function that takes an array of football clubs with properties: name, wins, loss, draws, scored, conceded, and returns the team name with the highest number of points. If two teams have the same number of points, return the team with the largest goal difference.

How to Calculate Points and Goal Difference
team = { name: "Manchester United", wins: 30, loss: 3, draws: 5, scored: 88, conceded: 20 }

Total Points = 3 * wins + 0 * loss + 1 * draws = 3 * 30 + 0 * 3 + 5 * 1 = 95 points
Goal Difference = scored - conceded = 88 - 20 = 68
Examples
champions([
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  ])
➞ "Manchester United"
Notes
Input is an array of teams.
 */

/*
- input:
  - array of objects 
    - objects consist of football clubs properties 
- output:
  - string (the team name with the highest number of points)
  - if teams have the same points return the name of the team with the largest goal difference 

- mental model 
  - iterate through teams
    - get the difference and the goal difference 
  [{name, points, goalDifference}]

  - sort the array in descending order by points
  - filter for the teams with the same points as the first team in the array
  - if one team return the team 
  - else return sort by the difference in descending order 
  - return the first team in the array 
 */



function champions(teams) {
  const teamsPointGoalDifference = teams.map(team => {
    return {
      name: team.name, 
      points: 3 * team.wins + 0 * team.loss + 1 * team.draws,
      goalDifference: team.scored - team.conceded
    }
  });
  console.log({teamsPointGoalDifference});
  teamsPointGoalDifference.sort((a,b) => b.points - a.points);
  console.log({teamsPointGoalDifference});
  const filteredWinners = teamsPointGoalDifference.filter(team => teamsPointGoalDifference[0].points === team.points);
  if (filteredWinners.length === 1) return filteredWinners[0].name;
  console.log({filteredWinners});
  filteredWinners.sort((a,b) => b.goalDifference- a.goalDifference);
  return filteredWinners[0].name;
}

console.log(champions([
  {
    name: "Chelsea",
    wins: 22,
    loss: 8,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  {
    name: "Manchester United",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 20,
  },
  {
    name: "nhancodes",
    wins: 30,
    loss: 3,
    draws: 5,
    scored: 88,
    conceded: 10,
  },
  {
    name: "Arsenal",
    wins: 24,
    loss: 6,
    draws: 8,
    scored: 98,
    conceded: 29,
  },
  ]))
//➞ "Manchester United"
