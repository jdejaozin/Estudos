let validator = {
    handleSubmit:(event)=>{
        event.preventDefault();
        let send = true;
        let inputs = form.querySelectorAll('input') // estou pegando todos os campos de imput
        
        validator.clearErrors();

        for(let i=0; i < inputs.length; i++){  // aqui é a verificação de todos os inputs
            let input = inputs[i];
            let check = validator.checkInput(input) // assim que ve o input
            if(check !== true){
                send = false;
                validator.showError(input, check);
            }
        }

        if(send){
            form.submit();
        }
    },
    checkInput:(input) => {
        let rules = input.getAttribute('data-rules');
        if(rules !== null){
            rules = rules.split('|'); // | separa as regras, o split tira as barrinhas, ai cria o array
            for(let k in rules){
                let rDetails = rules[k].split('=');
                switch(rDetails[0]){ //switch case ai
                    case 'required':
                        if(input.value === ''){
                            return 'Campo não pode ser vazio.';
                        }
                    break;
                    case 'min':
                        if(input.value.length < rDetails[1]){
                            return 'O campo deve ter pelo menos ' + rDetails[1] + ' caracteres.';
                        }
                    break;
                }
            }
        }
        return true;
    },
    showError:(input, error) => { // vai adiconar um elemento após o input
        input.style.borderColor = "#FF0000";

        let errorElement = document.createElement('div'); // aqui estou criando uma nova div para apresentar o erro
        errorElement.classList.add('error'); // adicionando uma classe a div criada
        errorElement.innerHTML = error;

        input.parentElement.insertBefore(errorElement, input.ElementSibling); // ele vai joga antes, indo pra cima do input
    },
    clearErrors:() => { // remoção das divs para não ir adicionando sem fim
        let inputs = form.querySelectorAll('input');
        for(let i = 0; i < inputs.length; i++){
            inputs[i].style='';
        }

        let errorElements = document.querySelectorAll('.error') //querySelectorAll para selecionar todos
        for(let i = 0; i < errorElements.length; i++){
            errorElements[i].remove();
        }
    }
};

let form = document.querySelector('.valideitor');
form.addEventListener('submit', validator.handleSubmit);