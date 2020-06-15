var myRevealingModule = function () {
  var private = "private";
  var public = "hello"; // private

  function privateFunc() {
    // private
    console.log("name: ", private);
  }
  function publicSetName(strName) {
    // 함수를 public으로
    private = strName; // 함수에서 사용하는 변수는 private
  }
  function publicGetName() {
    privateFunc();
  }

  return {
    setName: publicSetName,
    greeting: public,
    getName: publicGetName,
  };
};

var myRevealingModule = (function () {
  var privateCounter = 0;

  const privateFunc = () => privateCounter++;
  const publicIncrement = () => privateFunc();
  const publicFunc = () => publicIncrement();
  const publicGetCount = () => privateCounter;

  return {
    start: publicFunc,
    increment: publicIncrement,
    count: publicGetCount,
  };
})();
myRevealingModule.start();
myRevealingModule.increment();
console.log(myRevealingModule.count());
