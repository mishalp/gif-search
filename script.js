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

const apiCall = ()=>{
  p.classList.toggle('show')
  fetch(`https://api.giphy.com/v1/gifs/translate?api_key=naWr4njlvFIb0UIzdrr2f8BixPuPopP0&s=${word}`, {mode: 'cors'})
  .then(function(response) {
    return response.json();
  })
  .then((res)=>{
      img.src = res.data.images.original.url;
      btnDisplay()
    }).catch((data)=>{
      alert(data);
    }); 
    
  }
  const btnDisplay = ()=>{
  p.classList.toggle('show')
  btn.innerHTML = `More ${word}`;
}
apiCall()
btn.onclick = apiCall