function solution(year) {
  if (year%100==0) {
      return year/100;
  }
  else if (year%100 >= 1){
      return Math.ceil(year/100);
  }
}

solution(2001)