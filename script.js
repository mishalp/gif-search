var word = 'cats';
const img = document.querySelector('img');
const btn = document.querySelector('button');
const form = document.querySelector('form');
const p = document.querySelector('p');

form.onsubmit = (e)=>{
  e.preventDefault();
  word = form.search.value;
  form.search.value = "";
  apiCall()
}

const apiCall = async()=>{
  p.classList.toggle('show')
  const response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=naWr4njlvFIb0UIzdrr2f8BixPuPopP0&s=${word}`, {mode: 'cors'});
  const data = await response.json();
  img.src = data.data.images.original.url;
  btnDisplay()
  }

  const btnDisplay = ()=>{
    btn.innerHTML = `More ${word}`;
    p.classList.toggle('show')
}
apiCall()
btn.onclick = apiCall