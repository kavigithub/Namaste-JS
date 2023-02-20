ref: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter#examples

let numberList = [12, 5, 8, 130, 44];

function isGreater10(val) {
    return val >= 10
}

numberList.filter(isGreater10)
(3) [12, 130, 44]
const array = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

function findPrimeNumber(value){
    if(value % 2 === 0) {
        return false;
    }
    return value > 1
}

array.filter(findPrimeNumber)
(6) [3, 5, 7, 9, 11, 13]
function isPrime(num) {
    for(let i = 2; num > i; i++){
        if(num % i === 0) 
         return false   
    }
    return num > 1
}

array.filter(isPrime)
(6) [2, 3, 5, 7, 11, 13]
const arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  {},
  { id: null },
  { id: NaN },
  { id: "" },
];

let countInvalid = 0;
function invalidEntries(value) {
    if(value.id === 'null' && value.id === '' && isNaN(value.id)){
        return false;
    } else {
        countInvalid = countInvalid + 1;
    }

    return countInvalid;
}

arr.filter(invalidEntries);
(9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
let countInvalid = 0;
function invalidEntries(value) {
    if(value.id === 'null' && value.id === '' && isNaN(value.id)){
        return false;
    } else {
        countInvalid = countInvalid + 1;
         return value;
    }
   
}

arr.filter(invalidEntries);
(9) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
let countInvalid = 0;
function invalidEntries(value) {
  console.log(value)
   
}

arr.filter(invalidEntries);
VM967:3 {id: 15}
VM967:3 {id: -1}
VM967:3 {id: 0}
VM967:3 {id: 3}
VM967:3 {id: 12.2}
VM967:3 {}
VM967:3 {id: null}
VM967:3 {id: NaN}
VM967:3 {id: ''}
[]
let countInvalid = 0;
function invalidEntries(value) {
  console.log(value.id)
   
}

arr.filter(invalidEntries);
VM994:3 15
VM994:3 -1
VM994:3 0
VM994:3 3
VM994:3 12.2
VM994:3 
VM994:3 null
VM994:3 NaN
VM994:3 
[]
let countInvalid = 0;
function invalidEntries(value) {
  console.log(value.id === '')
}

arr.filter(invalidEntries);
VM1038:3 false
VM1038:3 false
VM1038:3 false
VM1038:3 false
VM1038:3 false
VM1038:3 false
VM1038:3 false
VM1038:3 false
VM1038:3 true
[]
let countInvalid = 0;
function invalidEntries(value) {
  if(value.id === ''){
      return false;
  } 
    return value
}

arr.filter(invalidEntries);
(8) [{…}, {…}, {…}, {…}, {…}, {…}, {…}, {…}]
let countInvalid = 0;
function invalidEntries(value) {
  if(value.id === '' || value.id === null || isNaN(value.id)){
      return false;
  } 
    return value
}

arr.filter(invalidEntries);
(5) [{…}, {…}, {…}, {…}, {…}]0: {id: 15}1: {id: -1}2: {id: 0}3: {id: 3}4: {id: 12.2}length: 5[[Prototype]]: Array(0)
let countInvalid = 0;
function invalidEntries(value) {
  if(isFinite(value.id) && valud.id !== 0){
      return false;
  } 
    return value
}

arr.filter(invalidEntries);
VM1368:3 Uncaught ReferenceError: valud is not defined
    at invalidEntries (<anonymous>:3:28)
    at Array.filter (<anonymous>)
    at <anonymous>:1:5
invalidEntries @ VM1368:3
(anonymous) @ VM1372:1
let countInvalid = 0;
function invalidEntries(value) {
  if(isFinite(value.id) && value.id !== 0){
      return false;
  } 
    return value
}

arr.filter(invalidEntries);
(4) [{…}, {…}, {…}, {…}]0: {id: 0}1: {}2: {id: NaN}id: NaN[[Prototype]]: Object3: {id: ''}id: ""[[Prototype]]: Objectlength: 4[[Prototype]]: Array(0)
let countInvalid = 0;
function invalidEntries(value) {
  if(Number.isFinite(value.id) && value.id !== 0){
      return false;
  } 
    return value
}

arr.filter(invalidEntries);
(5) [{…}, {…}, {…}, {…}, {…}]0: {id: 0}1: {}2: {id: null}3: {id: NaN}4: {id: ''}length: 5[[Prototype]]: Array(0)
function filterByID(item) {
  if (Number.isFinite(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

arr.filter(filterByID);
(4) [{…}, {…}, {…}, {…}]0: {id: 15}1: {id: -1}2: {id: 3}3: {id: 12.2}length: 4[[Prototype]]: Array(0)
function invalidEntries(value) {
  if(value.id === '' || value.id === null || isNaN(value.id)){
      return true;
  } 
    return false
}

arr.filter(invalidEntries);
(4) [{…}, {…}, {…}, {…}]0: {}1: {id: null}2: {id: NaN}3: {id: ''}length: 4[[Prototype]]: Array(0)
function invalidEntries(value) {
  if(value.id === '' || value.id === null || isNaN(value.id)){
      return false;
  } 
    return true
}

arr.filter(invalidEntries);
(5) [{…}, {…}, {…}, {…}, {…}]0: {id: 15}1: {id: -1}2: {id: 0}3: {id: 3}4: {id: 12.2}length: 5[[Prototype]]: Array(0)
function invalidEntries(value) {
  if(value.id === '' || value.id === null || isNaN(value.id) || value.id === 0){
      return false;
  } 
    countInvalid++ 
    return true
}

arr.filter(invalidEntries);
(4) [{…}, {…}, {…}, {…}]0: {id: 15}1: {id: -1}2: {id: 3}3: {id: 12.2}length: 4[[Prototype]]: Array(0)
countInvalid
4
const fruits = ["apple", "banana", "grapes", "mango", "orange"];

function filterItem(arr, query) {
  return arr.filter((item, index) => {
        item.toLowerCase().includes(query.toLowerCase())
    })
}

filterItem(fruits, 'go')
[]
filterItem(fruits, 'ap')
[]length: 0[[Prototype]]: Array(0)
function filterItem(arr, query) {
    console.log(arr, query);
  return arr.filter((item, index) => {
        item.toLowerCase().includes(query.toLowerCase())
    })
}

filterItem(fruits, 'ap')
VM2138:2 (5) ['apple', 'banana', 'grapes', 'mango', 'orange'] 'ap'
[]
function filterItem(arr, query) {
    console.log(arr, query);
  return arr.filter((item, index) => item.toLowerCase().includes(query.toLowerCase()))
}

filterItem(fruits, 'ap')
VM2171:2 (5) ['apple', 'banana', 'grapes', 'mango', 'orange'] 'ap'
(2) ['apple', 'grapes']