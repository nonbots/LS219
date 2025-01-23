/*
You volunteered to help out teaching a preschool in your area! You were given an array of all students and some important data about them, grouped by their teacher. Create a function that will ungroup every student so you can look at their details individually.

Example
ungroupStudents([{
  teacher: "Ms. Car",
  data: [{
     name: "James",
     emergenceNumber: "617-771-1082",
  }, {
     name: "Alice",
     alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}]) ➞ [{
  teacher: "Ms. Car",
  name: "James",
  emergencyNumber: "617-771-1082",
}, {
  teacher: "Ms. Car",
  name: "Alice",
  alergies: ["nuts", "carrots"],
}, {
  teacher: "Mr. Lamb",
  name: "Aaron",
  age: 3, 
}]
 * /
 
 /*
- input:
  - array of student objects (grouped by teacher)
- output:
  - array of student objects where each student has a teacher property
- mental model
  - iterate through each teacher 
    - iterate through each student
      - create an object 
        - teacher and properties in the data object 
      - add object to result array

*/

/* SOLUTION 1
function ungroupStudents(teachers) {
  const result = [];
  for (let i = 0; i < teachers.length;  i +=1) {
    const teacher = teachers[i];
    console.log({teacher});
    for (let j = 0; j < teacher.data.length; j += 1) {
      const data = teacher.data[j];
      console.log({data});
      result.push({teacher: teacher.teacher, ...data});
    }
  }
  return result;
}
*/

/* SOLUTION 2
function ungroupStudents(teachers)  {
  const result = [];
  for (let i = 0; i < teachers.length;  i +=1) {
    const teacher = teachers[i];
    console.log({teacher});
    result.push(...transformDataPerTeacher(teacher));
  }
  return result;
}

function transformDataPerTeacher(teacher) {
  return teacher.data.map(data => {
    return {teacher: teacher.teacher, ...data};
  });
}
*/

//SOLUTION 3 
function ungroupStudents(teachers)  {
  return teachers.map(teacher => transformDataPerTeacher(teacher)).flat();
}

function transformDataPerTeacher(teacher) {
  return teacher.data.map(data => {
    return {teacher: teacher.teacher, ...data};
  });
}

console.log(ungroupStudents([{
  teacher: "Ms. Car",
  data: [{
     name: "James",
     emergenceNumber: "617-771-1082",
  }, {
     name: "Alice",
     alergies: ["nuts", "carrots"],
  }],
}, {
  teacher: "Mr. Lamb",
  data: [{
    name: "Aaron",
    age: 3
  }]
}]));

/*[{
  teacher: "Ms. Car",
  name: "James",
  emergencyNumber: "617-771-1082",
}, {
  teacher: "Ms. Car",
  name: "Alice",
  alergies: ["nuts", "carrots"],
}, {
  teacher: "Mr. Lamb",
  name: "Aaron",
  age: 3,
}]
*/
