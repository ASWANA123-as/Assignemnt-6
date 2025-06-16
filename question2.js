//  Implement a program that calculates the factorial of a given number n
let number=Number(prompt("Give the number you want to get the factorial"))
let factorial =1
for(let i=1;i<=number;i++){
 factorial*=i
}
console.log("factorial of the given number is",factorial );