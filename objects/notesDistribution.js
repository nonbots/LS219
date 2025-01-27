/*
Create a function that takes an array of students and returns an object representing their notes distribution. Keep in mind that all invalid notes should not be counted in the distribution. Valid notes are: 1, 2, 3, 4, 5

Example
getNotesDistribution([
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
] ➞ {
  5: 3,
  3: 2,
  2: 1
})
Notes
Try doing that with filter + reduce.:w

 */


/*
input: array of student objects
output: object with occurrences of valid notes

mental model 
- iterate through the array 
 - filter for the valid notes
 - iterate through teh notes and add values to the occur object 

 */


function getNotesDistribution(students) {
  const result = {};
  students.forEach(student => {
    const validNotes = student.notes.filter(note => note >= 1 && note <= 5);
    validNotes.forEach(note => {
      console.log({note});
      (note in result) ? result[note] += 1 : result[note] =  1;
    });
  });
  return result;
}

console.log(getNotesDistribution([
  {
    "name": "Steve",
    "notes": [5, 5, 3, -1, 6]
  },
  {
    "name": "John",
    "notes": [3, 2, 5, 0, -3]
  }
]));
/*➞ {
  5: 3,
  3: 2,
  2: 1
})
*/
