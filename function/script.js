function getName1(name){
    return name
}

function getName2(name){
    return name
}

function getName3(name){
    return name
}

console.log(getName1('name'))
console.log(getName2('name'))
console.log(getName2('name'))

function getSumOfNumbers(number, type = 'odd'){
    let sum = 0
    for (let i = 0; i <= number; i++) {
        if(type === '') {
            sum += i
        }

        if(type === 'odd' && i % 2 !== 0) {
            sum += i
        }

        if(type === 'even' && i % 2 === 0){
            sum += i
        }
    }
    return sum

}
console.log(getSumOfNumbers(10))


function getDivisors(number = 1) {

    if(number < 0 || !Number.isInteger(number)){
alert('number должен быть целым числом и больше нуля!')
    }

let countDivisors = 0
    for (let i =0; i <= number; i++){
countDivisors += number % i === 0
    }
    return countDivisors

}

getDivisors()

const checkQuestionAnswer = (question, correctAnswer) => {
    let answer = prompt(question)

    if (answer) {
        answer = answer.toLowerCase().trim()
        if (answer === correctAnswer.toLowerCase()) {
            alert('ответ верный')
        } else {
            alert('ответ не верный')
        }
    }

}

checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода')

checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32')

checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри')


function showSuccessMessage(message) {
    return console.log(message)
}

function showErrorMessage(message) {
    return console.error(message)
}

const text = 'Привет! Как дела! Давно мы с тобой не виделись.'

function checkTextOnErrorSymbol(text, errorSymbol, successCallback, errorCallback) {

    for (let i = 0; i < text.length; i++) {
        if (text[i] === errorSymbol) {
            errorCallback(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}`)
        } else {
            successCallback('В данном тексте нет запрещенных символов')

        }

    }

}


checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage)




















