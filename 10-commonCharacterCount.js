function solution(s1, s2) {
  let sameChars = 0;
  
  for(let i = 0; i < s1.length; i++) {
      let index = s2.indexOf(s1[i])
      if(index >= 0) {
          sameChars++;
          s2 = s2.replace(s1[i],'');
      }
  }
  return sameChars;
}
