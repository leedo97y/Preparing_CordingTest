/**
 * @param {string} s
 * @return {boolean}
 */

var isValid = function(s) {
  let stack = [];
  
  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
 
  
    if (c == '(' || c == '[' || c == '{') {
      stack.push(c);
    } 
    else {
      switch (c) {
          
        case ')' : 
          if (stack.pop() != '(') {
            return false;
          } 
          break;
          
          
        case ']' :
          if (stack.pop() != '[') {
            return false;
          } 
          break;
          
          
        case '}' : 
          if (stack.pop() != '{') {
            return false;
          } 
          break;
      }
    }
  }  
  
  if (stack.length > 0) {
    return false;
  } 
  return true;
  
};