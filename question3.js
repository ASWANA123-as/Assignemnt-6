//3. Implement a program to check whether a number is prime or composite
let number=Number(prompt("Enter the number to check it is prime or composite"))
let isPrime=false;

if(number<1){
    console.log("number is not a prime ")
}
else if(number===1){
     console.log("number is not a prime not a composite ")
}
else{
for(let i=2;i<number;i++){
  
     if(number%i===0 ){
      isPrime=false
      break;
     }
    else{
        isPrime=true
    }
}
if(isPrime){
    console.log("number is prime ")
}
else{
    console.log("number is composite ")
}
}
