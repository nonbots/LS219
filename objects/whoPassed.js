/*
Given an object literal of student names and an array of their test scores over the semester, return a list of all the students who passed the course (in alphabetical order). However, there is one more thing to mention: the pass mark is 100% in everything!

Examples
whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20"]
}) ➞ ["Barry", "John"]

whoPassed({
  "Zara" : ["10/10"],
  "Kris" : ["30/30"],
  "Charlie" : ["100/100"],
  "Alex" : ["1/1"]
}) ➞ ["Alex", "Charlie", "Kris", "Zara"]

whoPassed({
  "Zach" : ["10/10", "2/4"],
  "Fred" : ["7/9", "2/3"]
}) ➞ []
Notes
All of a student's test scores must be 100% to pass.
Remember to return an array of student names sorted alphabetically.
 * /

/*
input: object with student names as keys and an array of strings (score) as value
outpt: array of student names (strings) that passed the course in alphabetical order 

rule: passing is 100 percent as the average 

mental model: 
  - convert to an array of entries
  - transform the entries values to an average
    - iterate through each string grade (get the summation)
      - divide the first and second value (grade)
      - return the sum + current grade
    - sum divde by number of grades
  - filter for the 100 averages (1) 
  - sort alphabetically 
  - return the keys 
 */

function whoPassed(students) {
  const averages = Object.entries(students).map(student => {
    const sum = student[1].reduce((accum, grade) => {
      return accum + Number(grade.split("/")[0])/Number(grade.split("/")[1]);
    }, 0);
    return {[student[0]]: sum / student[1].length};
  },0);
  console.log({averages});
  const passedStudents = averages.filter(student => Object.values(student)[0] === 1);
  
  return passedStudents.map(student => Object.keys(student)[0]).sort(); 
}

console.log(whoPassed({
  "John" : ["5/5", "50/50", "10/10", "10/10"],
  "Sarah" : ["4/8", "50/57", "7/10", "10/18"],
  "Adam" : ["8/10", "22/25", "3/5", "5/5"],
  "Barry" : ["3/3", "20/20"]
})) //➞ ["Barry", "John"]
console.log(whoPassed({
  "Zara" : ["10/10"],
  "Kris" : ["30/30"],
  "Charlie" : ["100/100"],
  "Alex" : ["1/1"]
}))// ➞ ["Alex", "Charlie", "Kris", "Zara"]

console.log(whoPassed({
  "Zach" : ["10/10", "2/4"],
  "Fred" : ["7/9", "2/3"]
}))// ➞ []
