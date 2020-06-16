const { generateKeyPairSync } = require("crypto");

var myCar = {
  name: "ford",

  drive() {
    console.log("drive");
  },
  panic() {
    console.log("wait.");
  },
};

var yourCar = Object.create(myCar);
console.log(yourCar.name);

var vehicle = {
  getModel() {
    console.log("model is... " + this.model);
  },
};

var car = Object.create(vehicle, {
  id: {
    value: MY_GLOBAL.nextId(),
    enumerable: true,
  },
  model: {
    value: "ford",
    enumerable: true,
  },
});

var vehiclePrototype = {
  init(carModel) {
    this.model = carModel;
  },
  getModel() {
    console.log("The model of this vehicle is.. " + this.model);
  },
}; // 프로토타입을 객체로 만들어두고,

function vehicle(model) {
  function F() {}
  F.prototype = vehiclePrototype;
  // 구성자 함수의 prototype 설정
  var f = new F();
  // F 구성자로 객체를 생성하고,

  f.init(model); // init을 통해 this.model에 model을 설정
  return f;
  // init을 통해 model property를 define하고, vehiclePrototype을 프로토타입으로 갖는 f객체를 리턴
}

var car = vehicle("ford");
car.getModel();

// 매번 구성자.prototype으로 설정할 필요 없이, prototype을 객체로 만들어두고,
// 필요에 따라 구성자의 prototype으로 지정해줄 수 있음.
// f.init()처럼 필요한 prototype을 실행하거나, f.prototype = ~~ 처럼 새로운 프로토타입을 추가하고, f를 리턴하면,
// 원하는 프로토타입을 추가적으로 설정할 수도 있음.
// vehicle은 vehicle prototype을 데려와, init을 default로 실행시키고, 객체를 return함.
// return된 객체는 vehicle prototype에 있는 getModel을 사용할 수 있음.
