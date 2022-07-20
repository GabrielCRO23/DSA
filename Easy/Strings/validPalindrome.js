// 125. Valid Palindrome
// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters,
// it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.
///[^A-Za-z0-9]/g
let isPalindrome = function (s) {
  s = s.replace(/[^a-z0-9]/gi, "").toLowerCase();
  let tempString = s.split("").reverse().join("");
  if (s === tempString) {
    return true;
  } else if (s !== tempString) {
    return false;
  }
};

console.log(isPalindrome("A man, a plan, a canal: Panama"));
