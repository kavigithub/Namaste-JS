const getFetchData = () => {
  return fetch('https://course-api.com/react-tours-project').then((resp) => resp.json())
 } ;
 console.log(getFetchData());
 export default getFetchData;