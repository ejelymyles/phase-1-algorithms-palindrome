/* 
define a function isPalindrome, that takes one word as a string
if word is palindrome, function returns true
if not, then it returns false
*/ 

/*ALGORITHM
 1. define the function
 2. set the string to lowercase and set it equal to a variable
 3. console log this to make sure its always lowercase
 4. reverse the the variable and set it equal to a different variable
 5. console log this to make sure its working 
6. compare the lowercase string to the reversed string
7. return true or false
8. erase console logs 
*/

/* 
  define a function here isPalindrome(word):
    set originalWord = word.toLowerCase();
    check it console.log(originalWord)
    reverseWord = split the originalWord apart by letter, reverse the letters, join them again
    set the originalWord and reverseWord === to each other and return this
*/


function isPalindrome(word) {
   const originalWord = word.toLowerCase();
   const reverseWord = originalWord.split('').reverse().join('');
   return originalWord === reverseWord;
}

/*
  The code takes the string passed in the paramater, lowercases it, and stores it in originalWord.
  It then takes the original word and separates it by each letter, reverses the order of the letters, and joins it again.
  It stores this value in reverseWord.It finally compares the two using the strict equality operator. 
  It will return true if they are equal to each other, and false otherwise. 

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
