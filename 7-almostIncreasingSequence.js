function solution(sequence) {
  let count = 0;
  // declare first two max values, one for back up and the other one for what we are using for comparison
  let previousMax, max = -999999;
  for(let i = 0; i < sequence.length; i++) {
      // if the current element is higher than the maximum, make it as the new maximum benchmark
      if(sequence[i] > max) {
          previousMax = max;
          max = sequence[i];
      } 
      // if the current element is less than the maximum, but larger than the previous maximum, eg 2 5 4 then we know 5 must be removed
      else if (sequence[i] > previousMax) {
          count++;
          // set the max as 4 in this case, since we want to remove 5
          max = sequence[i]
      } 
      // if the current element is equal to the max or previous max, or even less than, remove it and move on to the next number without reinitializing the maximum value since it would be backtracking
      else {
          count++;
      }
  }
  
  if(count > 1) {
      return false;
  }
  
  return true;
}
