function solution(statues) {
  // Sort numbers from least to greatest
  statues.sort(function(a, b) {
      return a - b;
  });
  let count = 0;

  // Loop through all items
  for(let i = 0; i < statues.length; i++) {
      // If there is a difference between the value of element x with element x+1,
      if((statues[i+1] - statues[i]) > 1) {
          // then add to count the amount of the difference subtracted by 1, since 3 to 5 we only need 1 statue instead of 5-3=2
          count += statues[i+1] - statues[i] - 1;
      } else {
          continue;
      }
  }
  return count;
}

