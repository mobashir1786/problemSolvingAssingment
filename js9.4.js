// Write a program which takes a numebr N
//  as input from the user and You need to reverse the number.

// Note: You have to complete Reverse_Number function. No need to take any input.

var Reverse_Number = (N) => 
{
  let str= String(N).split("");
  
  return parseInt(str.reverse().join(""));
};