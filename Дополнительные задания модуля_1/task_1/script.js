const calculationNumbers = {
    '+': function(x, y) { return x + y},
    '-': function(x, y) { return x - y},
    '*': function(x, y) { return x * y},
    '/': function(x, y) { return (x / y).toFixed(2)}
}

const mathOperators = Object.keys(calculationNumbers)

function getRandomNumber(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function setOperators(sign){
    this.sign = sign
    return  mathOperators.filter(sign => this.sign === sign)
}

const createMathTest = (min = 0, max = 10) => {
    const randomNumber1 = getRandomNumber(min, max)
    const randomNumber2 = getRandomNumber(min, max)

    return {
        expression: `${randomNumber1} ${ setOperators('+')} ${randomNumber2}`,
        result: calculationNumbers['+'](randomNumber1,randomNumber2)
    }

}

const correctAnswers = []
const wrongAnswers = []

const userInteraction = () => {
    const getMathTest = createMathTest(0,10)
    const getExpression = getMathTest.expression
    const getResult = getMathTest.result
    const prompts = prompt(`Сколько будет ?\n ${getExpression}`)
    if (prompts === null) return false
    else if (+prompts === +getResult) {
        alert(`Правильно : ${prompts}`)
        correctAnswers.push(prompts)
        userInteraction()
    } else {
        wrongAnswers.push(prompts)
        alert(`Не верно, правильный ответ : ${getResult}`)
        userInteraction()
    }

}
userInteraction()

document.body.style.width = '100%'
document.body.style.height = '100%'
document.body.style.display = 'flex'
document.body.style.justifyContent = 'center'
document.body.style.alignItems = 'center'
document.body.style.flexDirection = 'column'

document.body.insertAdjacentHTML('beforeend', `
<h1>результат:</h1>
<hr/>
<h3>Верные ответы - ${correctAnswers}</h3>
<h2 style="color: green">Колличество верных ответов - ${correctAnswers.length}</h2>
<hr/>7
<hr/>
<h3>Неверные ответы - ${wrongAnswers}</h3>
<h2 style="color: red">Колличество неверных ответов - ${wrongAnswers.length}</h2>
<hr/>
`)

console.log('correctAnswers', correctAnswers, 'correctAnswersLength', correctAnswers.length)
console.log('wrongAnswers', wrongAnswers, 'wrongAnswersLength', wrongAnswers.length)

