const Pizza = function () {
  this.size = 10;
  this.cheese = true;
  this.olive = true;
  this.sauce = true;

  this.selectDough = function (size) {
    this.size = size;
    return this;
  };

  this.setCheese = function (cheese) {
    this.cheese = cheese;
    return this;
  };

  this.setSauce = function (sauce) {
    this.sauce = sauce;
    return this;
  };

  this.setOlive = function (olive) {
    this.olive = olive;
    return this;
  };

  this.bake = function () {
    return {
      size: this.size,
      cheese: this.cheese,
      olive: this.olive,
      sauce: this.sauce,
    };
  };
};

const onlyBread = new Pizza()
  .selectDough(12)
  .setCheese(false)
  .setSauce(false)
  .setOlive(false)
  .bake();

console.log(onlyBread);

const fullPizza = new Pizza().bake();

console.log(fullPizza);
