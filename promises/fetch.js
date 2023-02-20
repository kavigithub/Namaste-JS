//fetch is browser api
/* RefLink: https://www.freecodecamp.org/news/top-javascript-concepts-to-know-before-learning-react/ */
const gitHubApi = 'https://api.github.com/users/kavigithub';

const user = fetch(gitHubApi)

console.log(user);

user.then(function(data) {
    console.log(data);
});

/* 
const quotesApi = 'https://type.fit/api/quotes';

const getQuotes = fetch(quotesApi);
getQuotes.then((response) => {
    if(!response.ok){
        throw Error(response.statusText)
    }
    return response.json();
}).then((data) => console.log(data))
.catch((err) => console.log(err)) */

/* const fetchData = async () => {
    const quotesApi = await fetch('https://type.fit/api/quotes');
    const response = await quotesApi.json()

    console.log(response);
} 
fetchData();
*/


/* You might be wondering how we can handle errors with async/await. Yup! You use the try and catch keywords: */

const fetchData = async () => {
    try{
        const quoteApi = await fetch('https://type.fit/api/quotes');
        const response = await quoteApi.json();
        console.log(response);
    } catch(error) {
        console.log(error)
    }
}
fetchData()