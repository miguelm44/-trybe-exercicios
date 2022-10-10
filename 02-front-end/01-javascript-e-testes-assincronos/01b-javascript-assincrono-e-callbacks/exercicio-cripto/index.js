const fetchCoins = async () => {
  const url =`https://api.coincap.io/v2/assets`;
try{
  const response = await  fetch(url)
  const json = await response.json();
  /* console.log(json.data)  */
  const array = json.data; 
  const diminuir = array.slice(0,10)
  return diminuir;
} catch(erro) {
  console.log(`algo ruim, ${erro}`);
  return erro;
}
};
  
 /* fetchCoins() 
 */

  const adcEl = ({name, symbol, priceUsd})=> {
const ul = document.getElementById('coins-list')
const criar = document.createElement('li')
criar.className ='lista'
criar.innerHTML = `${name} (${symbol}): ${Number(priceUsd).toFixed(2)}`;
ul.appendChild(criar)
 }

const  exec = async () => {
const api = await fetchCoins();
api.forEach((e) => console.log(adcEl(e)))   
} 

exec();
/* Bitcoin (BTC): 46785.06 */

window.onload = async () => {
  
}