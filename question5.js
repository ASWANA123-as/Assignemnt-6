let number=Number(prompt("enter the number "));
 let sum = 0;
    while (number !== 0) {

        let last = number % 10;
 
        sum += last;
 
        number = Math.floor(number/ 10);
    }
    console.log("sum is ",sum);