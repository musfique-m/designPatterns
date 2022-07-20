function Subject() {
  this.observers = [];
}

Subject.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
  },
  unsubscribe: function (fnToRemove) {
    this.observers = this.observers.filter((fn) => fn != fnToRemove);
  },
  fire: function () {
    this.observers.forEach((fn) => fn.call());
  },
};

function observer1() {
  console.log("o1 firing");
}

function observer2() {
  console.log("o2 firing");
}

const subject = new Subject();

subject.fire();

subject.subscribe(observer1);
subject.fire();

subject.subscribe(observer2);
subject.fire();

subject.unsubscribe(observer2);
subject.fire();
