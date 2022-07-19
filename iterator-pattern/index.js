const items = [1, "string", true, 1.124, {}, []];

function Iterator(items) {
  this.items = items;
  this.index = 0;
}

Iterator.prototype = {
  hasNext: function () {
    return this.index < this.items.length;
  },
  next: function () {
    return this.items[this.index++];
  },
};

const iter = new Iterator(items);

console.log(iter.hasNext(), iter.next());
console.log(iter.hasNext(), iter.next());
console.log(iter.hasNext(), iter.next());
console.log(iter.hasNext(), iter.next());
console.log(iter.hasNext(), iter.next());
console.log(iter.hasNext(), iter.next());
console.log(iter.hasNext(), iter.next());
