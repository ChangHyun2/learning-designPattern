// 객체 생성

const { DH_UNABLE_TO_CHECK_GENERATOR } = require("constants");

var newObject = {};
var newObject = Object.create(object.prototype);
var newObject = new Object();

// Key / value

newObject.someKey = "value";
var value = newObject.someKey;

newObject["somekey"] = "hello";

var defineProp = function (obj, key, value) {
  var config = {
    value: value,
    writable: true,
    confgiruable: true,
  };
  Object.defineProperty(obj, key, config);
};
var person = Object.create(Object.prototype);
defineProp(person, "car", "delorean");

Object.defineProperties(newObject, {
  somekey: {
    value: "hello world",
    writable: true,
  },
});

var driver = Object.create(person); // inherits from the person object
defineProp(driver, "topSpeed", "100mph");
console.log(driver.dateOfBirth);

function Car(model, year, miles) {
  this.model = model;
  this.yaer = year;
  this.miles = miles;
}

Car.prototype.toString = function () {
  return this.model + "has done" + thismiles + "miles";
};

var civic = new Car("honda civic", 2009, 2020);
console.log(civic.toString());
