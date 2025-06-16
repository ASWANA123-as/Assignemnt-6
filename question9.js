// 9.implement a program to check whether a string is palindrome or not 
function toCheckPalindromeOrNot(str){
    str=str.toLowerCase();
let reversedString='';
for(i=str.length-1;i>=0;i--){
    reversedString+=str[i];
    console.log(reversedString)
}
if(reversedString===str){
    console.log('Yes ,It is a palindrom')
}
else{
     console.log('No ,It is not a palindrom')
}
}

const stringToCheck=prompt('Enter the string that you need to check palindrome or not ');
 toCheckPalindromeOrNot(stringToCheck);
