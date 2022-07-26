const Person = function (name, age, height, weight) {
  this.name = name;
  this.age = age;
  this.height = height;
  this.weight = weight;
};

const PersonBuilder = function (name) {
  this.name = name;

  this.setAge = function (age) {
    this.age = age;
    return this;
  };

  this.setHeight = function (height) {
    this.height = height;
    return this;
  };

  this.setWeight = function (weight) {
    this.weight = weight;
    return this;
  };

  this.build = function () {
    return new Person(this.name, this.age, this.height, this.weight);
  };
};

const spongeBob = new PersonBuilder("Sponge Bob")
  .setHeight(1.5)
  .setWeight(20)
  .setAge(1)
  .build();

console.log(spongeBob);

const patrick = new PersonBuilder("Patrick Starfish").build();

console.log(patrick);
