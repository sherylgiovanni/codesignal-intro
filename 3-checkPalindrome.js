function solution(inputString) {
    test = false;
    words = inputString.split("")
    backwards = words.reverse();
    palindrome = backwards.join("")
    if(palindrome == inputString) {
        test = true
    } else {
        test = false
    }
    
    return test;
}

solution("hello")