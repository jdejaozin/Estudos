let imagem1 = document.querySelector(".imagem")
let humano = document.querySelector(".humano")
let anao = document.querySelector(".anao")
let elfo = document.querySelector(".elfo")

let valorHumano = humano.getAttribute('aria-checked');
let valorAnao = anao.getAttribute('aria-checked');
let valorElfo = elfo.getAttribute('aria-checked');
let imagem='';

function verificarHumano(){
    if(valorHumano !== true){
        imagem = "<div class='imagem'><img src='images/human.png' alt=''></div>"
    }
    imagem1.innerHTML= imagem
}
function verificarAnao(){
    imagem = "<div class='imagem'><img src='images/anao.png' alt=''></div>"
    imagem1.innerHTML= imagem
}
function verificarElfo(){
    if(valorElfo !== true){
        imagem = "<div class='imagem'><img src='images/elfo.png' alt=''></div>"
    }
    imagem1.innerHTML= imagem
}
console.log(valorHumano)
