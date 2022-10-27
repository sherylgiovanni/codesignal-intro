function solution(a) {
  let justPeopleNoTrees = a.filter(item => item != -1)

  // Not sure why only sort() does not work and instead needs the arguments
  justPeopleNoTrees.sort((a, b) => a - b)
  let index = 0
  
  for(let i = 0; i < a.length; i++) {
      if (a[i] != -1) {
          a[i] = justPeopleNoTrees[index]
          index++
      }
  }
  
  return a
}
