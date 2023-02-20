console.log('hi');

const arr = [5, 3, 4, 9, 1];

function duouble(x) {
    return x * 2;
}

const output = arr.map(duouble);

///or you can wite higher order function

const output2 = arr.map((item) => {
    return duouble(item);
})

console.log(output);
console.log(output2);

const findMaxNum = arr.reduce((accumalator, currentValue) => {
    //console.log(currentValue);
    if(currentValue > accumalator) {
        accumalator = currentValue;
    }
    return accumalator;
}, 0);

console.log(findMaxNum);

const users = [
    {firstName: 'abc', lastName: 'xyz', age: 23},
    {firstName: 'bca', lastName: 'zyx', age: 50},
    {firstName: 'cba', lastName: 'yzx', age: 75},
    {firstName: 'aaa', lastName: 'xxx', age: 23},
];

const getMatch = users.reduce((accumalator, currentValue) => {
    //let arr = [];
    console.log(accumalator[currentValue.age]);
    if(accumalator[currentValue.age]){
        accumalator[currentValue.age] = ++accumalator[currentValue.age];
    } else {
        accumalator[currentValue.age] = 1
    }
    return accumalator;
}, {});

console.log(getMatch);

const ageLess30 = users.filter(item => item.age < 30 ).map((item) => item.firstName);

console.log(ageLess30);

const ageMore50 = users.reduce((accumalator, currentValue) => {
    if(currentValue.age >= 50) {
        accumalator.push(currentValue.firstName);
    }
    return accumalator;
}, []);

console.log(ageMore50);