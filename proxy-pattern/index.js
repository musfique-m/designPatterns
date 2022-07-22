// external api
function CryptoCurrencyApi() {
  this.getValue = function (coin) {
    console.log("calling external service");
    switch (coin) {
      case "bitCoin":
        return "1.2";
      case "litCoin":
        return "0.89";
      case "dogeCoin":
        return "0.72";
      default:
        break;
    }
  };
}

function CryptoCurrencyProxyApi() {
  this.api = new CryptoCurrencyApi();
  this.cache = {};

  this.getValue = function (coin) {
    if (!this.cache[coin]) {
      this.cache[coin] = this.api.getValue(coin);
    }
    return this.cache[coin];
  };
}

const api = new CryptoCurrencyProxyApi();

console.log("first time call");
console.log(api.getValue("bitCoin"));
console.log(api.getValue("litCoin"));
console.log(api.getValue("dogeCoin"));

console.log("repeated call");
console.log(api.getValue("bitCoin"));
console.log(api.getValue("litCoin"));
console.log(api.getValue("dogeCoin"));

console.log("repeated call");
console.log(api.getValue("bitCoin"));
console.log(api.getValue("litCoin"));
console.log(api.getValue("dogeCoin"));
