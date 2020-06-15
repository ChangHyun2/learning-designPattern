/*

module pattern
object literal notation
AMD modules
CommonJS modules
ECMAScript Harmony modules

*/

//! Object literals

var value = "value";
var myObjectLiteral = {
  key: value,
  func() {
    console.log("hello");
  },
};
// don't require instantiation using the new operator

var myMoudle = {
  myProperty: "value",

  myConfig: {
    useCaching: true,
    language: "en",
  },

  saySomething() {
    console.log("hi");
  },

  reportConfig() {
    console.log(this.myConfig, this.myConfig.language);
  },

  updateConfig(newConfig) {
    if (typeof newConfig === "object") {
      this.myConfig = newConfig;
      console.log(this.myConfig);
    }
  },
};

//! module pattern

// class를 흉내내기 위한 방법으로
// object 내에 public/private를 지정할 수 있음.
// 클로저를 활용해 module 내에서 private한 변수나 method를 지정하고,
// 외부에서 사용할 객체를 return

var testModule = (function () {
  var counter = 0; // private 변수 (iife, closure 활용)

  function log(counter) {
    // private method
    console.log(counter);
  }

  return {
    // public
    getCounter() {
      log(counter);
    },

    incrementCounter() {
      return counter++;
    },

    resetCounter() {
      console.log("counter value pair to reset: ", counter);
      counter = 0;
    },
  };
})();

testModule.getCounter();
// testModule.log(); error발생

var basketModule = function () {
  // privates

  var basket = []; // private member

  function doSomethingPrivate() {} // private function

  return {
    addItem(value) {
      basket.push(value);
    },
    getItemCount() {
      return basket.length;
    },
    doSomething: doSomethingPrivate,
  };
};

// public
// var basketModule = {addItem(value), getItemCount(), doSomething()}
// private
// var basket = [], function doSomethingPrivate(){}

// Import mixins
// locally module을 사용하고 싶을 경우,

/*
var myModule = (function (jQ, _) {
  function privateMethod1() {
    jQ(".container").html("test"); //private하게 module을 사용
  }
  function privateMethod2() {
    console.log(_.min([10, 4]));
  }
  return {
    publicMethod: function () {
      privateMethod1();
    },
  };
})(jQuery, _);
myModule.publicMethod();
*/

// exports

var myModule = (function () {
  var module = {};
  var privateVariable = "hello world"; // private 변수

  function privateMethod() {} // private 메소드

  // global을 더럽히지 않은채로 module과 module을 정의할 수 있음
  // 예를 들어, global에 module 변수가 있을 경우 충돌이 발생하지 않음
  module.publicProperty = "Foobar";
  module.publicMethod = function () {
    console.log(privateVariable);
  };

  return module; // private하게 module을 정의해두고 public으로 export
})();

console.log(myModule);
console.log(myModule.publicProperty);
myModule.publicMethod();
myModule.publicProperty = "hello";
console.log(myModule);
