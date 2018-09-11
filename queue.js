/****Queues****
  FIFO/LILO
  functions: enqueue, dequeue, front, size, isEmpty
  Contain data similar to stack
*/

function Queue() {
  collection = [];
  this.print = function() {
    console.log(collection);
  };

  //push first item onto queue
  this.enqueue = function(element) {
    collection.push(element);
  };

  //remove first item from queue
  this.dequeue = function() {
    return collection.shift();
  };

  //returns first item of queue
  this.front = function() {
    return collection[0];
  };

  //return length of queue
  this.size = function() {
    return collection.length;
  };

  //return whether queue is empty or not
  this.isEmpty = function() {
    return (collection.length === 0)
  };
}

var q = new Queue();
q.enqueue('a');
q.enqueue('b');
q.enqueue('c');
q.print();
q.dequeue();
console.log(q.front());
q.print();



//PRIORITY QUEUE: Not only pass number, but also priority (lower number = higher priority). If same priority, it's in the order they were pushed on
function PriorityQueue() {
  var collection = [];
  this.printCollection = function() {
    console.log(collection);
  };

  this.enqueue = function(element) {
    if (this.isEmpty())
    {
      collection.push(element)
    }
    else
    {
      var added = false;
      for (var i = 0; i < collection.length; i++)
      {
        if (element[1] < collection[i][1]) //checking priorities
        {
          collection.splice(i, 0, element)
          added = true;
          break;
        }
      }
      if (!added)
      {
        collection.push(element);
      }
    }
  };

  //remove first item from queue
  this.dequeue = function() {
    return collection.shift();
  };

  //returns first item of queue
  this.front = function() {
    return collection[0];
  };

  //return length of queue
  this.size = function() {
    return collection.length;
  };

  //return whether queue is empty or not
  this.isEmpty = function() {
    return (collection.length === 0)
  };
}

var pq = new PriorityQueue();
pq.enqueue(['garcia', 2]);
pq.enqueue(['likes to eat', 3]);
pq.enqueue(['kitan', 1]);
pq.printCollection();
pq.dequeue();
pq.front();
pq.printCollection();
