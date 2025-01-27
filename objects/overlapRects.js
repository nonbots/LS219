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
 
 - set area to 0 
 - if x range is in between the first rect range 2-5 
  - get the 
 - return area 
 */


function overlappingRectangles(rect1, rect2) {
  
}
