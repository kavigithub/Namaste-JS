//import Menu  from './test.js'
const Menu = [
  {
    id: 1,
    name: "maggi",
    category: "breakfast",
    price: "12₹",
    description:
      "I love Maggi realy oo yues  Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
  },
  {
    id: 2,
    name: "allu pakoida",
    category: "evening",
    price: "20₹",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
  },
  {
    id: 3,
    name: "corn",
    category: "breakfast",
    price: "10₹",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
  },
  {
    id: 4,
    name: "chola",
    category: "lunch",
    price: "50₹",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
  },
  {
    id: 5,
    name: "pizza",
    category: "evening",
    price: "80₹",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
  },
  {
    id: 6,
    name: "Non-Veg Thali",
    category: "dinner",
    price: "180₹",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
  },
  {
    id: 7,
    name: "Sweets",
    category: "dinner",
    price: "60₹",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
  },
  {
    id: 8,
    name: "Rajma Rice",
    category: "lunch",
    price: "60₹",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
  },
  {
    id: 9,
    name: "samaso",
    category: "evening",
    price: "10₹",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, at consectetur totam voluptatibus quibusdam iusto. Accusamus quas, soluta ipsam autem eius necessitatibus fugiat in . ",
  },
];

//console.log(Menu, 'Menu');

//get Unique value with sets...The Set object lets you store unique values of any type
let getUniqueCatgory = ['All', ...new Set(Menu.map((item) => {
  return item.category
}))];

console.log(getUniqueCatgory);

let result = document.querySelector(".result");
result.innerHTML = getUniqueCatgory.map((category) => {
  return `<button>${category}</button>`
}).join('');

/////////////////////////////////////////////////////////////

let obj = {
  name : 'Johan'
}

obj.age = 29;

console.log(obj.name);

const items = {
  ['featured-item']: ['item1', 'item2']
}

console.log(items['featured-item']);

let appState = 'loading';
let keyName = 'computer';
const appSet = {
  [appState] : true
}

appSet[keyName] = 'apple';

console.log(appSet);


//Dynamic CHange Object Keys
const state = {
  loading: true,
  name: '', 
  job: ''
}

function updateState(key, value){
  state[key] = value; 
}

updateState('name', 'Kavita');
updateState('job', 'developer');
updateState('loading', false);
console.log(state);
