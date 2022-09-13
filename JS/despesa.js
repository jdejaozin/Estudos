const transactionsUl = document.querySelector("#transactions")  // Área onde aparece as transições
const incomeDisplay = document.querySelector("#money-plus")  // Área onde aparece o valor total das receitas
const expenseDisplay = document.querySelector("#money-minus") // Área onde aparece o valor total das despesas
const balanceDisplay = document.querySelector("#balance")  // Saldo total disponível
const form = document.querySelector("#form")  // Formulário para adicionar novas transações
const inputTransactionName = document.querySelector("#text")
const inputTransactionAmount = document.querySelector("#amount")
//console.log({incomeDisplay, expenseDisplay, balanceDisplay}) // achei fancy

// ctrl + shift + L, seleciona todas as ocorrencias

let dummyTransactions = [
    {id: 1, name: 'Bolo de brigadeiro', amount: -20},
    {id: 2, name: 'Salário', amount: 300},
    {id: 3, name: 'Torta de frango', amount: -10},
    {id: 4, name: 'Violão', amount: 150}
]

const removeTransaction = ID =>{
    dummyTransactions = dummyTransactions.filter(transaction => transaction.id !== ID)
    init()
}

const addTransactionIntoDOM = transaction => {
    const operator = transaction.amount < 0 ? '-' : '+'  // Operador ternário para verificar a operação
    const CSSClass = transaction.amount < 0 ? 'minus' : 'plus'  // Operador ternário para adicionar a classe
    // de acordo com a transação
    const li = document.createElement('li')  // Criando uma lista organizada, ao criar um a lista pelo
    // JavaScript ela é criada no formato de um objeto
    li.classList.add(CSSClass)
    li.innerHTML = `
        ${transaction.name} 
        <span> ${operator}R$${Math.abs(transaction.amount)}</span>
        <button class="delete-btn" onClick="removeTransaction(${transaction.id})">x</button>
    `
    //transactionsUl.innerHTML = li, pelo 'li' estar sendo criado como objeto esse comando não funciona
    transactionsUl.append(li) // Adiciona como último filho
    //.prepend(li) adiciona como primeiro filho
}

const updateBalanceValues = () =>{
    const transactionsAmounts = dummyTransactions.map(transaction => transaction.amount)
    // Transforma o array de objetos em um array de apenas números com o map

    const total = transactionsAmounts
        .reduce((accumulator, transaction) => accumulator + transaction, 0)
        .toFixed(2)
    // reduce para formar um único valor a partir do array, o 0 serve só para a primeira execução
    // da variável accumulator, sendo accumulator = 0
    const income = transactionsAmounts
        .filter(value => value > 0)
        .reduce((accumulator, value)=> accumulator + value, 0)
        .toFixed(2)
    // filter com reduce para separar os valores maiores que 0 e somar
    const expense = Math.abs(transactionsAmounts
        .filter(value => value < 0)
        .reduce((accumulator, value)=> accumulator + value, 0))
        .toFixed(2)
    // filter com reduce para separar os valores menores que 0 e somar
    // Se eu colocar o abs depois teria que recolocar também o .toFixed()
    
    balanceDisplay.textContent = `R$ ${total}`
    incomeDisplay.textContent = `R$ ${income}`
    expenseDisplay.textContent = `R$ ${expense}`
}

const init = () =>{  // Quando a página for carregada, o init será iniciado
    transactionsUl.innerHTML = ''  // Reset da transactionsUl para não repetir transações
    dummyTransactions.forEach(addTransactionIntoDOM)
    updateBalanceValues()
}

init()

const generateID = () => Math.round(Math.random() * 1000)

form.addEventListener('submit', event =>{
    event.preventDefault()

    const transactionName = inputTransactionName.value.trim()
    const transactionAmount = inputTransactionAmount.value.trim()

    if(inputTransactionName.value.trim() === '' || inputTransactionAmount.value.trim() === ''){
        alert('Por favor preencha os campos de nome e valor da transação!')
        return // Esse return só funciona aqui porque é uma função, então se o código entrar dentro desse
        // if a função será terminada com um return vazio
    }
    // O método trim() remove os espaços em branco do inicio e do fim da string

    const transaction = {
        id: generateID(), 
        name: transactionName, 
        amount: Number(transactionAmount) 
    }
    // Se eu colocar um '+' antes da variável ela é transformada
    // em um número, o nome disso é operador unário

    dummyTransactions.push(transaction)
    init()

    inputTransactionName.value = ''
    inputTransactionAmount.value = ''
})

// Posso quebras as funções maiores em funções menores
// Ler sobre função de destructuring assigment