// Implement a program to display Fibonacci Series (0,1,1,2,3,5,8,.... n)

let number=Number(prompt("enter the number of values in fibinocci series"));
let num1 = 0, num2 = 1, sum; 
for (let i = 0; i < number; i++) { 
console.log(num1);
sum = num1 + num2; 
num1 = num2; 
num2 = sum; 
}