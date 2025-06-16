//10.implement a program to find the number of vowels and consonents in a string
function toFindVowelsAndConsonents(str) {
    let vowels = "aeiou"
    let vowelCount = 0;
    let consonentsCount = 0;
    str = str.toLowerCase();
    for (i = 0; i <= str.length - 1; i++) {
        if (vowels.includes(str[i])) {
            vowelCount++
        }
        else {
            consonentsCount++
        }
    }



    console.log("vowel count is", vowelCount)
    console.log("consonents count is", consonentsCount)
}
const stringToCheck = prompt('Enter the string that you need to check number of vowels and consonents ');
toFindVowelsAndConsonents(stringToCheck);