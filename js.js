//manual de marca
let botao_marca = document.querySelector(".marca");
let trans = document.querySelector(".trans");
let video = document.querySelector("#video");
let site = document.querySelector(".site"); 
let manual = document.querySelector(".manual"); 

let sobre = document.querySelector(".sobre");
let doadores = document.querySelector(".doadores");
let contato = document.querySelector(".contato");



console.log(trans);

function abrir_marca(){
  
  botao_marca.classList.toggle('active');
  
  
  trans.classList.toggle ('active');
  
  video.load();
}
function transicao_site_manual(){
  if(manual.classList.contains('ativo')){
    manual.className = "manual desativo";
    site.className = "site ativo";
    
  }
  else{
    site.className = "site desativo";
    manual.className = "manual ativo";
  }
}

function conferir(){
  if(manual.classList.contains('ativo')){
    setTimeout(abrir_marca, 8000);
    transicao_site_manual();
    abrir_marca();
  }
}
function conferir2(){
    setTimeout(abrir_marca, 8000);
  
    abrir_marca();
}

sobre.addEventListener("click", conferir);
doadores.addEventListener("click", conferir);
contato.addEventListener("click", conferir);


botao_marca.addEventListener("click", conferir2);
botao_marca.addEventListener("click", transicao_site_manual);



//Pagina inicial
let image_slide = document.querySelector(".image-slider");
let slides = document.querySelectorAll(".image-slider .slides .slide");
let image_slider = document.querySelectorAll(".image-slider");

let direita = document.querySelector(".pra-frente");
let esquerda = document.querySelector(".pra-traz");

let div_bolinhas = document.querySelector(".image-slider .bolinhas");
let quant_bolinhas = 0

let index = 0;


while(quant_bolinhas<slides.length){
    let div_bolinha = document.createElement("div");
    div_bolinha.classList.add('bolinha');
    div_bolinhas.appendChild(div_bolinha);
    quant_bolinhas += 1;
}

let div_todas_bolinhas = document.querySelectorAll(".image-slider .bolinhas .bolinha");
div_todas_bolinhas[index].classList.toggle('active');

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
}

function virar_esquerda(){
    slides[index].className = "slide meio_direita";
    div_todas_bolinhas[index].classList.remove("active");
    index -= 1;

    if(index < 0){
        index = slides.length - 1;
    }

    slides[index].className = "slide esquerda_meio";
    div_todas_bolinhas[index].classList.add("active");
}
function virar_direita(){

    slides[index].className = "slide meio_esquerda";
    div_todas_bolinhas[index].classList.remove("active");
    index += 1;

    index = index%slides.length;
    slides[index].className = "slide direita_meio";
    div_todas_bolinhas[index].classList.add("active");
}
  
window.addEventListener("scroll", reveal);
esquerda.addEventListener("click", virar_esquerda);
direita.addEventListener("click", virar_direita);




