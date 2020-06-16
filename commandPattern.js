class Command {
  execute() {
    throw new error("this method must be overwritten!");
  }
  // Command class를 상속해 execute method사용
}

class Light {
  cunstructor() {
    this._on = false;
  }
  on() {
    this._on = true;
    console.log("on");
  }

  off() {
    this._on = false;
    console.log("off");
  }
}

class LightOnCommand extends Command {
  constructor(light) {
    super(); // execute 상속
    this.light = light;
  }
  execute() {
    this.light.on();
  }
}

class RemoteControl {
  constructor() {
    this.command = null;
  }
  setCommand(command) {
    this.command = command;
  }
  buttonWasPressed() {
    this.command.execute();
  }
}

let oRemote = new RemoteControl();
let oLight = new Light(); // light 객체 생성 (_on property를 가지며 on/off()에 의해 상태가 바뀜)
let oLightCommand = new LightOnCommand(oLight); // light 객체를 받아 execute할 경우 , light를 on()시킴.

oRemote.setCommand(oLightCommand);
oRemote.buttonWasPressed();
