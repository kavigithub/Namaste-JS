//console.log('promise file run');
/* function a(){
    console.log('a')
}

function b() {
    console.log('b')
}

function main(){
    console.log('main func call');
    setTimeout(a, 1000);

    //(_) The job queue gets higher priority than the callback queue.

    new Promise(function(resolve, reject){
        resolve('I am promise')
    }).then(resolve => console.log(resolve));

    b()
}

main(); */

let promise = new Promise(function(reslove, reject) {
                  /*  let value = 'water';     
                   reslove(value);   */       
                    setTimeout(() => {
                        reject(new Error('Jack fell down')); 
                    }, 2000)           
              });

 const grandParents = () => {
    promise.then((result) => {
        console.log('Cooking start with' + result);
    }).catch((error) => {
         console.log('This is got from promise ' + error.message);
    });
}
 
 grandParents();
/* 
let promiseError = new Promise((resolve, reject) => {
                    reject(new Error('No water'))
                    });        */  
/////////////////////////////////////////////////////////////////////////////////////////                    
let getUser = new Promise(function(resolve, reject){
    const user = {
        name: 'Kavita',
        email: 'abc@gmail.com',
        password: '12345',
        permission: ['db', 'hr', 'dev']
    }

    resolve(user);
});

getUser.then((user) => {
    console.log(`Got the user ${user.name}`);

    if(user.permission.includes('hr')){
        throw new Error('You are not allowed')
    }
}).then((user) => {
    console.log(`Got the email ${user.email}`)
}).catch((error) => {
    console.log(error)
})

const validateUser = ({userId, passwrod}) => {
    return new Promise((resolve, reject) => {
        if(userId && passwrod){
            resolve('Autheticated')
        } else {
            reject({
                message: 'userid and message is not autheticated'
            })
        }
    })
}

const app = async () => {
    const data = {userId: '', password: ''};
    try {
        const result = await validateUser(data);
        console.log(result);    
    } catch (error) {
        console.log(error.message);
    }
}

app();

const cart = ['shoes', 'pants', 'kurta'];

const promiseId = createOrder(cart) //order id return 

//this is callback function we attach to our promise
promiseId.then((orderId) => {
    console.log(orderId);
    //proceedToPayment(orderId)
}).catch((err) => {
    console.log(err.message)
})

//Producer ...Promise producer

function createOrder(cart){
    const prm = new Promise((reslove, reject) => {
        //for work flow example
        //createOrder
        //validateCart
        //orderId

        if(!validateCart(cart)){
            const err = new Error('Cart is not valid');
            reject(err)
        }

        //logic for createOrder
        const orderId = '12355' //in real world we get this details from API
        if(orderId){
            setTimeout(()=> {
                reslove(orderId)
            }, 5000)
        }
    })

    return prm;
}

function validateCart(cart){
    //check if cart is empty or not
    //return true
    return false
}

