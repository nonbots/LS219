
function queueTime(queue, tillSize) {
  let elapsedTime = 0;
  let tills = queue.splice(0, tillSize);
  while (tills.some(till => till !== 0)) {
    const min = Math.min(...tills.filter(till => till !== 0));
    tills = tills.map(till => {
      if (till === min) {
        return queue.length > 0 ? queue.shift() : 0 ;
      } else if (till > 0) {
        return till - min;
      } else {
        return till;
      }
    });
    elapsedTime += min;
  }
  return elapsedTime;
}
console.log(queueTime([10,2,3,3], 2));//10
//[10, 2] 8,3, 5,3 2,0
//[10, 2], 2 [10, 3] , 5, [10 ,3] 8, [10,0]
console.log(queueTime([2,3,10], 2));//12
console.log(queueTime([5,3,4], 1));//12
