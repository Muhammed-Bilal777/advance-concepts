import { UserDecorator } from "./serviceDecorator";

class UserClass {
  @UserDecorator
  sayHello(name: string) {
    console.log(`hey : ${name}`);
  }

  //   @UserDecorator
  //   sayGreeting(name: string) {
  //     console.log(`Greetings : ${name}`);
  //   }
}

const user = new UserClass();
console.log(user.sayHello("bilal"));
//console.log(user.sayGreeting("Muhammed"));
