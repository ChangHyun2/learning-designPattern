/*

subject {
    observers : [observer1, observer2, observer3, ...]
}
state가 변할 경우, subject가 각각의 observer에게 notify해줌.

*/

// list of observers
function ObserverList() {
  this.observerList = [];
}
ObserverList.prototype.add = function (obj) {
  this.observerList.push(obj);
};
ObserverList.prototype.count = function () {
  this.observerList.length;
};
ObserverList.prototype.get = function (index) {
  if (index > -1 && index < this.observerList.length)
    return this.observerList[index];
};
ObserverList.prototype.indexOf = function (obj, startIndex = 0) {
  var i = startIndex;

  while (i < this.observerList.length) {
    if (this.observerList[i] === obj) {
      return i;
    }
    i++;
  }
  return -1;
};
ObserverList.prototype.removeAt = function (index) {
  return this.observerList.splice(index, 1);
};

// subject
function Subject() {
  this.observers = new ObserverList();
}
Subject.prototype.addObserver = function (observer) {
  this.observers.add(observer);
};
Subject.prototype.removeObserver = function (observer) {
  this.observers.removeAt(this.observers.indexOf(observer));
};
Subject.prototype.notify = function (state) {
  var observerCount = this.observers.count();
  for (var i = 0; i < observerCount; i++) {
    this.observers.get(i).update(state);
  }
};

// observer
function Observer() {
  this.update = function () {};
}

function extend(obj, extension) {
  for (let key in extension) {
    obj[key] = extension[key];
  }
}

var controlCheckBox = document.querySelector(".mainCheckBox");
var addBtn = document.querySelector(".addnewObserver");
var container = document.querySelector(".observersContainer");

// concrete subject
extend(controlCheckBox, new Subject());
// checkbox가 subject.
// checkbox를 클릭할 경우, observers는 state를 update.

controlCheckBox.onclick = function () {
  controlCheckBox.notify(controlCheckBox.checked);
}; // subject 클릭 시,  observer들이 checked value를 갱신함.

addBtn.onclick = addNewObserver;

//concrete Observer
function addNewObserver() {
  var check = document.createElement("input");
  check.type = "checkbox";

  extend(check, new Observer());
  // observer property를 갖는 checkbox를 만들고,

  check.update = function (value) {
    this.checked = value;
  }; // update 메소드 지정

  controlCheckBox.addObserver(check);
  // Subject에 observer 추가
  container.appendChild(check);
} // dom element 생성 및 observer 생성&추가
