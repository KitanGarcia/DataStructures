/****Sets****
  FILO/LIFO????
  functions: hsa, values, add, remove
  Use to check for the presence of an item
*/

function mySet() {
  //will hold the set
  let collection = [];

  //checks for presence of an element and returns true or false
  this.has = function(element) {
    return (collection.indexOf(element) !== -1)
  };

  //returns all values in set
  this.values = function() {
    return collection;
  }

  //adds an element to the set
  this.add = function(element) {
    if(!this.has(element)) {
      collection.push(element);
      return true;
    }
  }

  //removes element from set
  this.remove = function(element) {
    if(this.has(element)) {
      index = collection.indexOf(element);
      collection.splice(index, 1);//take out one element at index
      return true;
    }
    return false;
  }

  this.size = function() {
    return collection.length;
  }

  //returns union of two sets
  this.union = function(otherSet) {
    let unionSet = new mySet();
    let firstSet = this.values();
    let secondSet = otherSet.values();
    firstSet.forEach(function(e) {
      unionSet.add(e);
    });
    secondSet.forEach(function(e) {
      unionSet.add(e);
    });
    return unionSet;
  }

  //returns interseciton of two sets
  this.intersection = function(otherSet) {
    let intersectionSet = new mySet();
    let firstSet = this.values();
    firstSet.forEach(function(e) {
      if(otherSet.has(e)) {
        intersectionSet.add(e);
      }
    });
    return intersectionSet;
  }


  //returns difference of two sets
  this.difference = function(otherSet) {
		let differenceSet = new mySet();
		let firstSet = this.values();
		firstSet.forEach(function(e) {
		  if (!otherSet.has(e)) {
        differenceSet.add(e);
      }
    });
    return differenceSet;
  }

  //checks if set is subset of another set
  this.subset = function(otherSet) {
		let firstSet = this.values();
    return firstSet.every(function(value) {
      return otherSet.has(value);
    });
  }
}


let setA = new mySet();
let setB = new mySet();
setA.add('a');
setB.add('b');
setB.add('c');
setB.add('d');
setB.add('a');
console.log(setA.subset(setB));
console.log(setA.intersection(setB).values());
console.log(setB.difference(setA).values());


console.log("Everything following is using built in set");

/*Built in set*/
let setC = new Set();
let setD = new Set();
setC.add('a');
setD.add('b');
setD.add('c');
setD.add('d');
setD.add('a');
console.log(setD.values());
setD.delete('a');
console.log(setD.has('a'));
console.log(setD.add('d'));
