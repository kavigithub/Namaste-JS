console.log('hi');
//ref link
// https://www.youtube.com/watch?v=ZYb_ZU8LNxs

//synchronous
console.log('i eat');
console.log(' iceacreme');
console.log(' with a');
console.log(' spoon');

//Asynchronous : setTimeout is Asynchronous javascript buid in funciton
setTimeout(() => {
    console.log('test');
}, 2000)

//Callback
//when you nest a function inside another function as an argument. Its Callback function
function one(param){
    console.log('One function')
    param()
}

function two(){
    console.log('setp two')
}

one(two)

//Ice Creame Project

let stocks = {
   Fruits: [
    'Strawberry', 'Bluberries', 'Crainberries', 'Grapes', 'Bananna', 'Apple'
   ],
   liquid: ['water', 'ice'],
   holder: ['cone', 'cup', 'stick'],
   toppings: ['chocolate', 'peanuts', 'Gems']
};

//call back hell example

/* let order = (fruitName, callProduction) => {
    console.log('order placed, please order place');

    setTimeout(() => {
        console.log(`${stocks.Fruits[fruitName]} was selected`);

        callProduction(); //not start unless fruit selected
    }, 2000);
}

let production = () => {
    setTimeout(() => {
        console.log('order received, starting production started');

        setTimeout(() => {
            console.log('the fruits has chopped');

            setTimeout(() => {
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} are added`);

                setTimeout(() => {
                    console.log('Machine was started');

                    setTimeout(() => {
                        console.log(`icecream was placed on ${stocks.holder[0]}`)
                           setTimeout(() => {
                            console.log(`${stocks.toppings[2]} your faviroute topping added`)
                               
                                setTimeout(() => {
                                    console.log('Serve Icecreame')
                                }, 1000)

                           }, 3000) 
                    }, 2000);
                }, 1000)
            }, 1000)
        }, 2000)
    }, 0000);
}

order(0, production); */

//Promise...pending..resolve/reject...then...catch
//relationship between time and work
//Promis CHaining...means (when your promise resovled or rejact it return(.then.then.then))
//catch handler is error handling our part
//finally...means it

let is_Shop_Open = true; //if it is open we serve the icecream or say sorry

//Promises
/* let order = (time, work) => {
    return new Promise((resolve, reject) => {
        if(is_Shop_Open){
            setTimeout(() => {
                resolve(work())
            },time)         
        } else {
            reject(console.log('Our shop is closed'))
        }
    })
}

order(2000, () => console.log(`${stocks.Fruits[3]} was selected`))
.then(()=> {
    return order(0000, ()=> console.log('Production has started'))
})
.then(() => {
    return order(2000, ()=> console.log('Fruits was choped'))
})
.then(() => {
    return order(1000, () => console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} was added`))
})
.then(() => {
    return order(1000, () => console.log('Start machine'))
})
.then( () => {
    return order(2000, () => console.log(`Ice creame placed on ${stocks.holder[0]}`))
})
.then(() => {
    return order(3000, () => console.log(`${stocks.toppings[0]} was added on your icecreame`))
})
.then(() => {
    return order(2000, () => console.log('Your icecreame was served'))
})
.catch(() => {
    console.error('Costomer left')
})
.finally(() => {
    console.log('day end, our shop is closed')
}); */

//fake code to undetstand async and await
/* async function order(){
    try {
        await abc
    } catch (error) {
        console.error(error.message);
    }
    finally {
        console.log('this code runs anyways')
    }
}

order().then(() => console.log('I will run')) */

//Async Await
function time(ms) {
    return new Promise((resolve, reject) => {
        if(is_Shop_Open){
            //console.log(resolve, 'resolveresolveresolve')
            setTimeout(resolve, ms)
        } else {
            reject(console.log('shop is closed'))
        }
    })
}

async function kitchen() {
    try{
        await time(2000);
        console.log(`${stocks.Fruits[2]} fruit seelcted`)

        console.log('start the production')
        await time(0000);

        await time(2000)
        console.log('cut the fruits');

        await time(1000)
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`)

        await time(1000)
        console.log(`start the machine`)

        await time(2000)
        console.log(`ice creame placed in ${stocks.holder[0]}`)

        await time(3000)
        console.log(`${stocks.toppings[0]} was added on your icecreame`)

        await time(2000)
        console.log('serve icecreame')
    }
    catch(error){
        console.log('customer left')
    }
    finally{
        console.log('day end, shop closed')
    }
}

kitchen();

///movies
//check promiseEg.html