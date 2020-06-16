var mySingleton = (function () {
  var instance;

  function init() {
    function privateMethod() {
      console.log("private");
    }

    var private = "also private";
    var privateRandomNum = Math.random();

    return {
      publicMethod() {
        console.log(private);
        privateMethod();
      },
      publicProperty: "public",
      getRandomNumber() {
        return privateRandomNum;
      },
    };
  }

  return {
    getInstance() {
      if (!instance) {
        // instance 존재 여부를 체크하지 않으면,
        // getInstance()마다 instance private 변수에
        // init에서 return하는 새로운 객체를 재할당하게 됨.
        instance = init();
      }

      return instance;
    },
  };
})();

// mySingleton 객체의 private : instance, init(){}
// mySIngleton 객체는 getInstance 메소드를 가짐.
// mySingleton 객체는 closure를 통해 private한 instance를 한 개 가지고 있음.
// 해당 instance를 getInstance를 통해 불러오며, 최초의 getInstance에서 instance를 init함.
// IIFE에 의해 생성된 closure(instance), init에 의해 생성된 closure (private, privateRandomNum, privateMethod(){})
console.log(mySingleton);
mySingleton.name = "jun";
console.log(mySingleton);
var instance1 = mySingleton.getInstance();
var instance2 = mySingleton.getInstance();
console.log(instance1 === instance2);

// 단 하나의 instance만 필요할 경우 사용.
// sole instance를 extend할 경우 인스턴스를 수정할 수 없어.

mySingleton.getInstance = function () {
  if (this._instance == null) {
    if (isFoo()) {
      this._instance = new FooSingleton();
    } else {
      this._instance = new BasicSingleton();
    }
  }
  return this._instance;
};

var SingletonTester = (function () {
  function Singleton(options = {}) {
    this.name = "singletonTester";
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 10;
  } // 구성자 함수 (class)

  var instance;

  var _static = {
    name: "SingletonTester",
    getInstance: function (options) {
      if (instance === undefined) {
        instance = new Singleton(options); // 구성자 함수를 통해 instance 생성
      }
      return instance;
    },
  };

  return _static;
})();

var singletonTest = SingletonTester.getInstance({ pointX: 5 });
