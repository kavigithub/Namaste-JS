import { name, age, greet, greetMessage } from "./person.js";

const message = (name, age) => {
 /*  const name = 'Jesse';
  const age = 30; */
  //return name + " is " + age + ' years old. '; 
  console.log(name + " is " + age + ' years old. ');
}
//export default message;
message(name, age);

console.log(name, age);

greet('Good Evening');

let msgMorning = new greetMessage();
msgMorning.greet('Good Morning');