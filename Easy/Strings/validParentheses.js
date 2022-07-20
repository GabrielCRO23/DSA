// 20. Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
let isValid = function (s) {
  let stack = [];
  let map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") stack.push(s[i]);
    console.log(stack);
    console.log(stack.length - 1);
  }
};

isValid("((");

// IF THE LENGTH OF STACK IS GREATER THAN ZERO... ANDDDD... MAP[STACK[STACK.LENGTH - 1]] === STRING[I]

/*
function validParentheses(s) {
  let stack = [];
  let brackets = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    if (brackets[i]) {
      stack.push(brackets[i]);
      return true;
    } else if (stack.pop() !== i) {
      return false;
    }
  }
}
*/
