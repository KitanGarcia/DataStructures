/****Stacks****
  FILO/LIFO
  functions: push, pop, peek, length
  Ie. Used in browser's back button
*/

/*Palindromes*/
let letters = [];

let word = "racecar";
let rword = "";

//add letters of word into letters array
for (var i = 0; i < word.length; i++) {
  letters.push(word[i]);
}

//pop off letters stack in reverse order
for (var i = 0; i < word.length; i++) {
  rword = rword + letters.pop();
}

if (rword === word) {
  console.log(word + " is a palindrome.");
}

else {
  console.log(word + " is not a palindrome.");
}


/*To create a stack*/
let Stack = function() {
  this.count = 0;
  this.storage = {};

  //Add value to end of stack
  this.push = function(value) {
    this.storage[this.count] = value;
    this.count++;
  }

  //Remove and return value at end of stack
  this.pop = function() {
    if (this.count === 0) {
      return undefined;
    }
    
    this.count--;
    let result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  }

  //Get length of stack
  this.size = function() {
    return this.count;
  }

  //Returns value at end of stack (without removing it)
  this.peek = function() {
    return this.storage[this.count-1];
  }
}

let myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek());//2
console.log(myStack.pop());//2
console.log(myStack.peek());//1
myStack.push("hihihi");
console.log(myStack.size());//2
console.log(myStack.peek());//"hihihi"
//console.log(myStack.pop());//"hihihi"
console.log(myStack.peek());//1
myStack.push(1);
myStack.push(2);
myStack.push(3);
myStack.push(4);
myStack.push(5);
console.log(myStack.storage);
