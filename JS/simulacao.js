const imageSection = document.querySelector('.images')
const textSection = document.querySelector('.text')
const logSection = document.querySelector('.log')



const personImg = {'João': 'images/jao.jpg', 
                    'Kleber': 'images/kleb.jpg', 
                    'Carol': 'images/carol.jpg', 
                    'Vinicius': 'images/vini.jpg'}

function clicado(){

    const person = ['João', 'Kleber', 'Vinicius', 'Carol']

    num = Math.floor(Math.random() * 3)

    if (num === 0){
        let personAct = person[Math.floor(Math.random() * 4)]
        imageSection.innerHTML = `
        <img src='${personImg[personAct]}'>
        <img class="imgCenter" src='images/flo.jpg'>`
        textSection.innerHTML = `
        <p>${personAct} colheu uma flor</p>
        `
        logSection.innerHTML += '</br>Flores foram colhidas'
    }
    else if (num === 1){
        let personAct = person[Math.floor(Math.random() * 4)]
        imageSection.innerHTML = `
        <img src='${personImg[personAct]}'>
        <img class="imgCenter" src='images/barr.jpg'>
        `
        textSection.innerHTML = `
        <p>${personAct} caiu de um barranco</p>
        `
        logSection.innerHTML += '</br>Pessoas cairam'
    }
    else if (num === 2){
        let numPessoa = Math.floor(Math.random() * 4)
        console.log(numPessoa)
        let personAct1 = person[numPessoa]
        console.log(personAct1)
        person.splice(numPessoa, 1)
        console.log(person)
        let personAct2 = person[Math.floor(Math.random() * 3)]
        console.log(personAct2)
        imageSection.innerHTML = `
        <img src='${personImg[personAct1]}'>
        <img class="imgCenter" src='images/lanca.png'>
        <img src='${personImg[personAct2]}'>
        `
        textSection.innerHTML = `
        <p>${personAct1} matou ${personAct2} com uma lança</p>
        `
        logSection.innerHTML += '</br>Pessoas foram mortas'
    }

}
/*
0: `imageSection.innerHTML = 
                    <img src='${personImg[personAct]}'>
                    <img src='images/flo.jpg'>
                    textSection.innerHTML = 
                    <p>${personAct} colheu flores</p>
                    logSection.innerHTML += '</br>Flores foram colhidas'<p>${personAct} colheu flores</p>`,

                1: `<p>${personAct} caiu do barranco</p>`,
                2: `<p>${personAct1} matou ${personAct2}</p>`}

*/