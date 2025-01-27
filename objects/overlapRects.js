/*Create a function that returns the area of the overlap between two rectangles. The function will receive two rectangles, each with the coordinates of two of its opposite angles.

Examples
overlappingRectangles(
  [{ x: 2, y: 1 }, { x: 5, y: 5 }],
  [{ x: 3, y: 2 }, { x: 5, y: 7 }]
) ➞ 6

overlappingRectangles(
  [{ x: 2, y: -9 }, { x: 13, y: -4 }],
  [{ x: 5, y: -11 }, { x: 7, y: -2 }]
) ➞ 10

overlappingRectangles(
  [{ x: -8, y: -7 }, { x: -4, y: 0 }],
  [{ x: -5, y: -9 }, { x: -1, y: -2 }]
) ➞ 5

*/

/*
- mental model 
  - x range: 2 - 5
  - y range: 1 - 5

  - x range 3 - 5 (3, 4, 5)   
  - y range 2 - 7 (2, 3, 4, 5) 

  - 3,2 and 5 5 get the area 
   - product of absolute width and length 
 
 
 - check if rect1 is inside rect2 (both rect1 points are in rect2) - return the area of rect1
 - check if rect2 is inside rect1 (both rect2 points are in rect1) - return the area of rect2


 - do the same with rect2 checking on rect1 
 - check if rect1 top left is inside rect2 then get the area by getting rect1 top left and rect2 bottom right points
 - check if rect1 bottom right is inside rect2 then get the area by getting rect2 bottom right and rect1 top left points
 - return 0 (if not of the conditions meet
 */

/*
function overlappingRectangles(rect1, rect2) {
  //are both rect2 points in rect1
  if(isPointInRect(rect1, rect2, 0) && isPointInRect(rect1, rect2, 1)) return getArea(rect2[0], rect2[1]);
  //are both rect1 points in rect2
  if(isPointInRect(rect2, rect1, 0) && isPointInRect(rect2, rect1, 1)) return getArea(rect1[0], rect1[1]);
  //one rect2 point in rect1 (topleft)
  if(isPointInRect(rect1, rect2, 0)) return getArea(rect2[0], rect1[1]);
  //one rect2 point in rect1 (bottomright)
  if(isPointInRect(rect1, rect2, 1)) return getArea(rect2[1], rect1[0]);
  //one rect1 point in rect2 (topleft)
  if(isPointInRect(rect2, rect1, 0)) return getArea(rect1[0], rect2[1]);
  //one rect1 point in rect2 (bottomright)
  if(isPointInRect(rect2, rect1, 1)) return getArea(rect1[1], rect2[0]);
  return 0;
}
// if a point rect2 is inside rect1
function isPointInRect(rect1, rect2, point) {
  //console.log("HERE",{point});
  return isXInRange(rect1, rect2, point) && isYInRange(rect1,rect2, point);
}
// if rect2 x is inbetween rect1 x
function isXInRange(rect1, rect2, point) {
  //console.log({point});
  if (rect2[point].x >= rect1[0].x && rect2[point].x <= rect1[1].x) return true;
  return false;
}
function isYInRange(rect1, rect2, point) {
  if (rect2[point].y >= rect1[0].y && rect2[point].y <= rect1[1].y) return true;
  return false;
}

function getArea(point1, point2){
 const width = Math.abs(point1.x - point2.x);
 const height = Math.abs(point1.y - point2.y);
  return width * height;
}
*/

//get all the points from the larger rectangle 
//get all the point from the smaller retangle 
//smaller rect => [[2,1], [3,1], [4,1], [5,1], [3,1]...]
//iterate through the larger rect for each row and colum
//check if the smaller rect has those values and add those values to the array
//if more than 1 point
//get the area by grabbing the first and last points
// else return 0

function overlappingRectangles(rect1, rect2) {
  const smallerRect = getArea(rect1[0], rect1[1]) < getArea(rect2[0], rect2[1]) ? rect1 : rect2;
  const largerRect = smallerRect === rect1 ? rect2 : rect1;
  const smallerRectPoints = getPoints(smallerRect);
  console.log({smallerRectPoints});
  const commonPoints = [];
  for (let y = largerRect[0].y; y <= largerRect[1].y; y += 1) {
    for (let x = largerRect[0].x; x <= largerRect[1].x; x += 1) {
      if (smallerRectPoints.includes(`${y},${x}`)) commonPoints.push(`${y},${x}`);
    }
  }
  console.log({commonPoints});
  if (commonPoints.length < 2) return 0;
  const point1 = {x: commonPoints[0].split(",")[0], y:commonPoints[0].split(",")[1]};
  const point2 = {x: commonPoints[commonPoints.length - 1].split(",")[0], y: commonPoints[commonPoints.length - 1].split(",")[1]};

  return getArea(point1, point2);
}

function getPoints(rect) {
  const points = [];
  for (let y = rect[0].y; y <= rect[1].y; y += 1) {
    for (let x = rect[0].x; x <= rect[1].x; x += 1) {
      points.push(`${y},${x}`);
    }
  }
  return points;
}
function getArea(point1, point2){
 const width = Math.abs(point1.x - point2.x);
 const height = Math.abs(point1.y - point2.y);
  return width * height;
}

//both rect2 points inside rect1
console.log(overlappingRectangles(
  [{ x: 2, y: 1 }, { x: 5, y: 5 }], 
  [{ x: 3, y: 2 }, { x: 5, y: 5 }]
)) //6➞  //true,true, true,true

//both rect1 points inside rect2
console.log(overlappingRectangles(
  [{ x: 4, y: 3 }, { x: 5, y: 5 }], 
  [{ x: 3, y: 2 }, { x: 5, y: 5 }]
)) //➞  //true,true, true,true

console.log(overlappingRectangles(
  [{ x: 2, y: 1 }, { x: 5, y: 5 }], 
  [{ x: 3, y: 2 }, { x: 5, y: 7 }]
)) //➞ 6 //true,true, true,false

console.log(overlappingRectangles(
  [{ x: 2, y: -9 }, { x: 13, y: -4 }],
  [{ x: 5, y: -11 }, { x: 7, y: -2 }]
)) //➞ 10 true, false, true, true

console.log(overlappingRectangles(
  [{ x: -8, y: -7 }, { x: -4, y: 0 }],
  [{ x: -5, y: -9 }, { x: -1, y: -2 }]
))// ➞ 5 // true, false, false, true

console.log(overlappingRectangles(
  [{ x: -8, y: -7 }, { x: -4, y: 0 }],
  [{ x: -9, y: -9 }, { x: -1, y: -2 }]
))// ➞ 5 // false, false, false, true 


