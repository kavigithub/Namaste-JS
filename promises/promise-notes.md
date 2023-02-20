https://www.youtube.com/watch?v=CP0CqAkY-Zs&list=PLIJrr73KDmRyCanrlIS8PEOF0kPKgI8jN&index=5

(_) The job queue gets higher priority than the callback queue.
image.png

Promis are special object in javascript
new Promise() in this '()' is executor function.

What is promise?
Its placeholder for a certain period of time until we received value from async operations.
OR
Its a container for future value
OR
The Promise special object represents the eventually complete or failure of an asynchronous operation, that async operation eventually completed and its resulting value.

Why use Promise imp?
while we using callback...the function dependent on another function and this dependent function is dependent on another...we call this inversion of control, we were passing function inside another function api and we were given control of our code to some other random api which we wated to avoid this is called inversion of control. We solve this by using promise object. This promise eventually filled with the result of aysnc function. and we don't need to pass function inside another function. but what we attach callback function to that promise object. And whenever we had data inside the promise obj and promise resolved that call back function, and will atuomatically called by Promises.

To handle callback hell we used promise chain plz check  (promise-video-notes.doxc)

The executor function takes 2 parameter 1. resolve 2.reject. Its a special call back function. U don't  have to ceate this param..it is created by Javascript
new Promise((resolve, reject) => {

})

resolve : success of  the function
reject : rejection of the method

In the Promises you have to inform your consumer when the execution has been started, when the execution has been completed (resolve) or when the exection has been got Error(reject) to the consumer. And the is done some internal state

Promise State(internal)
Promise State(pending) : Pending (when execution start);
Promise State(fullfilled) : when reslove successfully (when execution complete);
Promise State(rejected) : when promise reject (when execution NOT complete);

if the promise is fullfilled/reject = the promise is settled

Prmise Result
undefiend: Initial phase when state is pending
value : when promise resolve successfully
error : when promise reject

How to inform to our consumer whater our promise is complete or not or still pending?

.then()  //then is used to handle possitive senario 
  -return another promise
  -retun async value
  -return or throw an error
.catch() //used to handle error senario
.finally()

Promise Chain
If you are creating promise and calling '.then' method multiple times on the same promise obj does not form object chain so you have to use return explicitly in it
eg
const gitHubApi = 'https://api.github.com/users/kavigithub';

const user = fetch(gitHubApi);

user.then((data) => {
  return data //do something with data
}).then((anotherData) => {
  return funcName(anotherData)
})

