export const name = 'Messi';
const age = 40;

export {age};

export function greet(msg){
  console.log(msg);
}

export class greetMessage {
  constructor(){
    console.log('this is constructor');
  }

  greet(msg){
    console.log('Calling from class : ' + msg);
  }
}