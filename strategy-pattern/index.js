function Fedex() {
  this.calculate = (package) => {
    //
    return 2.54;
  };
}

function Ups() {
  this.calculate = (package) => {
    //
    return 1.95;
  };
}

function Usps() {
  this.calculate = (package) => {
    //
    return 3.8;
  };
}

const fedex = new Fedex();
const ups = new Ups();
const usps = new Usps();

const package = { propName: "propValue" };

console.table({
  fedex: fedex.calculate(package),
  ups: ups.calculate(package),
  usps: usps.calculate(package),
});

function Shipping() {
  this.company = "";
  this.setStrategy = (company) => {
    this.company = company;
  };
  this.calculate = (package) => {
    return this.company.calculate(package);
  };
}

const shipping = new Shipping();

shipping.setStrategy(fedex);
console.log(`fedex`, shipping.calculate(package));

shipping.setStrategy(ups);
console.log(`ups`, shipping.calculate(package));

shipping.setStrategy(usps);
console.log(`usps`, shipping.calculate(package));
