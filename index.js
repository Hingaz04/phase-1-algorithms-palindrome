function isPalindrome(word) {
  // Write your algorithm here
    // Convert the string to lowercase
    str = str.toLowerCase();
    // Initialize pointers
    let left = 0;
    let right = str.length - 1;

    // Loop while left pointer is less than or equal to right pointer
    while (left <= right) {
        // Compare characters at left and right pointers
        if (str[left] !== str[right]) {
            // Not a palindrome
            return false;
        }
        // Move pointers
        left++;
        right--;
    }

    // If the loop completes, it's a palindrome
    return true;
}




/* 
  Add your pseudocode here
  function isPalindrome(str):
    // Convert the string to lowercase
    str = str.toLowerCase()
    // Initialize pointers
    left = 0
    right = str.length - 1

    // Loop while left pointer is less than or equal to right pointer
    while left <= right:
        // Compare characters at left and right pointers
        if str[left] != str[right]:
            // Not a palindrome
            return false
        // Move pointers
        left = left + 1
        right = right - 1

    // If the loop completes, it's a palindrome
    return true

*/

/*
  Add written explanation of your solution here

  The `isPalindrome` function first converts the input string to lowercase to make the comparison case-insensitive. Then, it uses two pointers, one at the beginning of the string (left) and one at the end of the string (right), to compare characters. If at any point the characters at the left and right pointers are not equal, the function returns false because it's not a palindrome. If the loop completes without finding any unequal characters, the function returns true, indicating that the string is a palindrome.
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
