/*
Create a function that returns which chapter is nearest to the page you're on. If two chapters are equidistant, return the chapter with the higher page number.

Examples
nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10) ➞ "Chapter 2"


nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200) ➞ "The End?"


nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3) ➞ "Chapter 1b"
Notes
All page numbers in the dictionary will be valid integers.
Return the higher page number if ever two pages are equidistant (see last test case).
*/

/*
- input: object of key chapter and value page (integer), the page number
- output: string (key)

- rules:
  get the chapter nearest to the page you are on
  if equal return the chapter with the larger page number
  if page number is not in range return the last chapter
  all chapters an page numbers are in ascending order 

 - mental model
  - iterate through through the entries
    - init a current and next chapter to a array
    - check if the target number is in within the range of the current and next chapter
       -if the page is equal to or in between the current and next chapter
    - get the distance between the current  and next chapter 
    - if the distances are the same return the next chapter
    - if the current distance is less than next chapter distance is return the current chapter else return next chapter 
 
 - return the last chapter
 */

function nearestChapter(chapters, page) {
  const entries = Object.entries(chapters);
  for (let i = 0; i < entries.length - 1; i += 1) {
    const currentChapter = entries[i];
    const nextChapter = entries[i + 1];
    if (page >= currentChapter[1] && page <= nextChapter[1]) {
      const currentDistance = page - currentChapter[1];
      const nextDistance = nextChapter[1] - page;  
      if (currentDistance  === nextDistance) return nextChapter[0];
      return currentDistance < nextDistance ? currentChapter[0] : nextChapter[0];
    }
  }
  return entries[entries.length - 1][0];
}

console.log(nearestChapter({
  "Chapter 1" : 1,
  "Chapter 2" : 15,
  "Chapter 3" : 37
}, 10))// ➞ "Chapter 2"


console.log(nearestChapter({
  "New Beginnings" : 1,
  "Strange Developments" : 62,
  "The End?" : 194,
  "The True Ending" : 460
}, 200))// ➞ "The End?"


console.log(nearestChapter({
  "Chapter 1a" : 1,
  "Chapter 1b" : 5
}, 3))// ➞ "Chapter 1b"
