//8.Implement a program to reverse a string 
let stringToReverse=prompt("enter your string to reverse ");
let reversedString='';
for(i=stringToReverse.length-1;i>=0;i--){
    reversedString+=stringToReverse[i];
 
}
console.log("reversed string is",reversedString)