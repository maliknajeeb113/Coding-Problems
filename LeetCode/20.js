// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"
// Output: true
// Example 2:

// Input: s = "()[]{}"
// Output: true
// Example 3:

// Input: s = "(]"
// Output: false

var isValid = function(s) {
    if(s.length % 2 !==0) return false

    let stack = []
    for (let i of s){
        if(i == ")" && stack.length>0 && stack.at(-1)=="("){
            stack.pop()
        }
        else if(i == "}" && stack.length>0 && stack.at(-1)=="{"){
            stack.pop()
        }
        else if(i == "]" && stack.length>0 && stack.at(-1)=="["){
            stack.pop()
        }
        else stack.push(i)
    }

    return !stack.length>0
};
