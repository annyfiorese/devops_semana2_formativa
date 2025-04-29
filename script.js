document.addEventListener('DOMContentLoaded', () => {
    const tituloHobbies = document.querySelector('section:nth-of-type(1) h2');
    const listaHobbies = document.querySelector('ul.interesses');
  
    tituloHobbies.style.cursor = 'pointer';
  
    tituloHobbies.addEventListener('click', () => {
      listaHobbies.classList.toggle('hidden'); 
    });
  });
  