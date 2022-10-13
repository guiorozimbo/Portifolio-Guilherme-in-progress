function typeWriter(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';
  textoArray.forEach((letra, i)=> {
      setTimeout(() => {
          elemento.innerHTML += letra
      }, 97*i)
  });
}



const titulo = document.querySelectorAll('h2');
Array.from(titulo).forEach(typeWriter);
const titulo1 = document.querySelectorAll('h3');
Array.from(titulo1).forEach(typeWriter);
const titulo2 = document.querySelectorAll('h1');
Array.from(titulo2).forEach(typeWriter);
const titulo3 = document.querySelectorAll('p');
Array.from(titulo3).forEach(typeWriter);


