console.log("Página cargada correctamente");

document.addEventListener("DOMContentLoaded", function() {
  let index = 0;
  const slides = document.querySelectorAll('.slide');
  const dots = document.querySelectorAll('.dot');

  function mostrarSlide(n) {
    slides.forEach((slide, i) => {
      slide.classList.remove('active');
      dots[i].classList.remove('active');
      if (i === n) {
        slide.classList.add('active');
        dots[i].classList.add('active');
      }
    });
  }

  function cambiarSlide(direccion) {
    index += direccion;
    if (index < 0) index = slides.length - 1;
    if (index >= slides.length) index = 0;
    mostrarSlide(index);
  }

  function irASlide(n) {
    index = n;
    mostrarSlide(index);
  }

  // Exponer funciones al HTML
  window.cambiarSlide = cambiarSlide;
  window.irASlide = irASlide;

  // Cambio automático cada 5 segundos
  setInterval(() => {
    cambiarSlide(1);
  }, 5000);
});

