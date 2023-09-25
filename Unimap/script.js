// Notificação
var notificationButton = document.getElementById('notification-button');
var notificationContainer = document.getElementById('notification-container');

function mostrarNotificacao() {
    notificationContainer.style.display = 'block';
}

function fecharNotificacao() {
    notificationContainer.style.display = 'none';
}

notificationButton.addEventListener('click', mostrarNotificacao);

// carrossel
const slider = document.querySelectorAll('.slider');
const btnPrev = document.getElementById('prev-button');
const btnNext = document.getElementById('next-button');

let currentSlide = 0;

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider() {
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
}

btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)


// comentarios

document.getElementById("botao-abrir").addEventListener("click", function () {
    document.getElementById("caixa-comentarios").classList.remove("oculta");
});


document.getElementById("botao-fechar").addEventListener("click", function () {
    document.getElementById("caixa-comentarios").classList.add("oculta");
});


document.getElementById("botao-comentar").addEventListener("click", function () {
    var novoComentario = document.getElementById("novo-comentario").value;
    var comentarios = document.getElementById("comentarios");
    var novoParagrafo = document.createElement("p");
    novoParagrafo.textContent = novoComentario;
    comentarios.appendChild(novoParagrafo);
    document.getElementById("novo-comentario").value = "";
});
