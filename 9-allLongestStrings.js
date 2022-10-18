function solution(inputArray) {
  let record = 0;
  let longest = []
  
  for(let i = 0; i < inputArray.length; i++) {
      if(inputArray[i].length > record) {
          // if breaks the record, change record and wipe away the entire array
          record = inputArray[i].length;
          longest = [];
          longest.push(inputArray[i]);
      } else if (inputArray[i].length == record) {
          // if same as record, push it to the array 
          longest.push(inputArray[i]);
      } else {
          continue;
      }
  }
  return longest;
}
