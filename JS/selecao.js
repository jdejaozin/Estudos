const option = document.querySelector('.opt');
const imageShow = document.querySelector(".image");
const personClass = document.querySelector('.personClass')
const human = document.querySelector("#human");
const dwarf = document.querySelector("#dwarf");
const elf = document.querySelector("#elf");
const personName = document.querySelector("#personName")

let imageHTML='';

function mouseIn(event){
    if(human.checked === true || dwarf.checked === true || elf.checked === true){

    }else{
        if(event.target.id === 'human'){
            imageHTML = "<div class='image'><img src='images/human.png' alt=''></div>"
            imageShow.innerHTML = imageHTML
        }
        else if(event.target.id === 'elf'){
            imageHTML = "<div class='image'><img src='images/elfo.png' alt=''></div>"
            imageShow.innerHTML = imageHTML
        }
        else if(event.target.id === 'dwarf'){
            imageHTML = "<div class='image'><img src='images/anao.png' alt=''></div>"
            imageShow.innerHTML = imageHTML
        }
    }
}

function mouseOut(){
    if(human.checked === true || dwarf.checked === true || elf.checked === true){
        
    }else{
        imageShow.innerHTML = ''
    }
}

function checky(){
    if(human.checked){
        imageHTML = "<div class='imagem'><img src='images/human.png' alt=''></div>"
        imageShow.innerHTML= imageHTML
        personClass.innerHTML = `
        Classe</br>
        <input id='warrior' type="radio" name='personClass'>
        <label for="#warrior">Guerreiro</label><br/>
        <input id='archer' type='radio' name='personClass'>
        <label for="#archer">Arqueiro</label><br/>
        <input id='wizard' type='radio' name='personClass'>
        <label for="#wizard">Mago</label><br/>`
    }
    else if(dwarf.checked){
        imageHTML = "<div class='imagem'><img src='images/anao.png' alt=''></div>"
        imageShow.innerHTML= imageHTML
        personClass.innerHTML = `
        Classe</br>
        <input id='warrior' type="radio" name='personClass'>
        <label for="#warrior">Só pra mostrar</label><br/>
        <input id='archer' type='radio' name='personClass'>
        <label for="#archer">Que da pra</label><br/>
        <input id='wizard' type='radio' name='personClass'>
        <label for="#wizard">Fazer um pra cada</label><br/>`
    }
    else if(elf.checked){
        imageHTML = "<div class='imagem'><img src='images/elfo.png' alt=''></div>"
        imageShow.innerHTML= imageHTML
        personClass.innerHTML = `
        Classe</br>
        <input id='warrior' type="radio" name='personClass'>
        <label for="#warrior">lorem</label><br/>
        <input id='archer' type='radio' name='personClass'>
        <label for="#archer">ipsum</label><br/>
        <input id='wizard' type='radio' name='personClass'>
        <label for="#wizard">coisas em latim são chiques</label><br/>`
    }
}

option.addEventListener('click', checky, false)
option.addEventListener('mouseover', mouseIn, false)
option.addEventListener('mouseout', mouseOut, false)
