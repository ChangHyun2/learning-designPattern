/*//! Pass

Observer pattern : notification을 받는 observer가 
Publish/Subscribe pattern : notification을 받는 subscriber와 event를 fire하는 publisher가 공존하는 topic/event channel을 사용
*/

const { doesNotReject } = require("assert");

//publish

$(el).trigger("/login", [{ username: "test", userData: "test" }]);

dojo.publish("/login", [{ username: "test", userData: "test" }]);
el.publish("login", { username: "test", userData: "test" });

// subscribe
$(el).on("/login", function (event) {});

var handle = dojo.subscribe("/login", function (data) {});
el.on("/login", function (data) {});

// unsubscribe
$(el).off("/login");
dojo.unsubscribe(handle);
el.detach("/login");

var mailCounter = 0;

var subscriber1 = subscribe("inbox/newMessage", function (topic, data) {
  // for debugging
  console.log("a new message was received", topic);

  // subject에서 전해지는 data를 사용
  $(".messageSender").html(data.sender);
  $(".messagePreview").html(data.body);
});
var subscriber2 = subscribe("inbox/newMessage", function (topic, data) {
  // for debugging

  // subject에서 전해지는 data를 사용
  $(".newMessageCounter").html(++mailCounter);

  publish("inbox/newMessage", [
    {
      sender: "hello@google.com",
      body: "hey there! how are you doing today!",
    },
  ]);
});

// pub sub vs observer design pattern
// https://medium.com/easyread/difference-between-pub-sub-pattern-and-observable-pattern-d5ae3d81e6ce

// event from subject >> notify to observers

// publisher >> topic A, topic B >> subscriber 1,2,3
