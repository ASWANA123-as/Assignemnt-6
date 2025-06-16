//7. Implement a program that takes basic salary as input.
//  Calculate and print Basic Salary, DA, HRA, PF, and Net Salary with the following rules.
//  If the Basic Salary is less than 10000 then DA is 25% of the Basic Salary. 
// HRA is 30% of Basic Salary. PF is 8% of the Basic Salary.
//  If the Basic Salary is in between 10000 and 20000 then DA is 20% of the Basic Salary. HRA is 25% of Basic Salary.
//  PF is 6% of the Basic Salary. If the Basic Salary is in between 20000 and 30000 then DA is 15% of the Basic Salary.
//  HRA is 20% of the Basic Salary. PF is 4% of the Basic Salary.
//  If the Basic Salary is greater than or equal to 30000 then DA is 10% of the Basic Salary.
//  HRA is 15% of Basic Salary. PF is 2% of the Basic Salary. 
// Net Salary is the total of Basic Salary, DA, and HRA and subtract the PF.
let basicsalary=Number(prompt("enter your basic salary "));
let da,hra,pf,netsalary;
if(basicsalary<10000){
   da=(25*basicsalary)/100;
   hra=(30*basicsalary)/100;
   pf=(8*basicsalary)/100;
}
else if(basicsalary>=10000 &&basicsalary<20000){
     da=(20*basicsalary)/100;
   hra=(25*basicsalary)/100;
   pf=(6*basicsalary)/100;

}
else if(basicsalary>=20000 &&basicsalary<30000){
     da=(15*basicsalary)/100;
   hra=(20*basicsalary)/100;
   pf=(4*basicsalary)/100;

}
else{
     da=(10*basicsalary)/100;
   hra=(15*basicsalary)/100;
   pf=(2*basicsalary)/100;
}
netsalary=(basicsalary+da+hra)-pf;

console.log("your basic salary is ",basicsalary);
console.log("your DA is ",da);
console.log("your HRA is ",hra);
console.log("your PF is ",pf);
console.log("your Net salary is ",netsalary);