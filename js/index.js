// Declaro las variables
let carrousel = document.querySelector('.contenedor__carruselUno')
let btnNext = document.querySelector(".contenedor__boton--siguiente");
let btnBack = document.querySelector(".contenedor__boton--anterior");
let numero = 0;
// inicio el slide
btnNext.addEventListener("click", (e) => {
  e.preventDefault();
  if (numero === 0) {
    numero = 1;
    carrousel.style.transform='translateX(-1000px)'
    btnNext.style.opacity=0;
    btnBack.style.opacity=1;

  } 
});
btnBack.addEventListener("click", (e) => {
  e.preventDefault();
  if (numero === 1) {
    numero = 0;
    carrousel.style.transform='translateX(0px)'
    btnBack.style.opacity=0;
    btnNext.style.opacity=1;

  }
});



