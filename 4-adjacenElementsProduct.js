function solution(inputArray) {
  initial = inputArray[0] * inputArray[1]
  for(i = 0; i <= inputArray.length-1; i++) {
      sum = inputArray[i] * inputArray[i+1]
      if (sum > initial) {
          initial = sum;
      }
  }
  
  return initial;
}
