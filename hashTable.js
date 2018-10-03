/****Hash Tables****
  functions: add, remove, lookup
  Used to implement associative arrays or mappings of key value pairs
  Common way to implement map data structure or objects
  Efficient.
  AVERAGE: Search: O(1), Space: O(n), Insert: O(1), Delete: O(1)
  
  Take key input -> hashes it (maps strings to numbers ie. indices in an array). Collision: two keys hashed to same number. Can store both key value pairs at that index of collision. 
*/

var hash = (string, max) => {//max is number of "buckets" to store values
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);//sum charCode of each character into hash
  }
  return hash % max;
};

let HashTable = function() {
  let storage = [];
  const storageLimit = 4;//number of "buckets"

  this.print = function() {
    console.log(storage)
  }

  this.add = function(key, value) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined)
    {
      storage[index] = [[key, value]];//if empty, set to key value pair
    }
    else//if collision
    {
      var inserted = false;
      for (var i = 0; i < storage[index].length; i++)
      {//0 IS KEY, 1 IS VALUE!!!
        if (storage[index][i][0] === key)//if key exists
        {
          storage[index][i][1] = value;//set new value
          inserted = true;
        }
      }
      if (inserted === false)//if key does not exist
      {
        storage[index].push([key, value]);//multiple vals in a bucket
      }
    }
  };

  this.remove = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index].length === 1 && storage[index][0][0] === key)//if bucket has 1 element which is the key, delete the whole bucket
    {
      delete storage[index];
    }
    else
    {
      for (var i = 0; i < storage[index].length; i++)
      {
        if (storage[index][i][0] === key)//iterate through whole array. Until matching key found. Delete.
        {
          delete storage[index][i];
        }
      }
    }
  };

  this.lookup = function(key) {
    var index = hash(key, storageLimit);
    if (storage[index] === undefined)
    {
      return undefined;
    }
    else
    {
      for (var i = 0; i < storage[index].length; i++)
      {
        if (storage[index][i][0] === key)
        {
          return storage[index][i][1];
        }
      }
    }
  };
}


let ht = new HashTable();
ht.add('kitan', 'person');
ht.add('fido', 'dog');
ht.add('rex', 'dinosaur');
ht.add('tux', 'penguin');
console.log(ht.lookup('tux'));
ht.print();

/*
console.log(hash('kitan', 10));
console.log(hash('garcia', 10));
console.log(hash('em', 10));
console.log(hash('m', 10));*/
