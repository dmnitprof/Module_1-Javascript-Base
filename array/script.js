function getSumOfSequence(number) {
    let array = []
    for (let i = 1; i <= number; i++) {

        array.push(i)



    }
    array.splice(1, array.length - 2)

    const sum = array.reduce((acc, elem) => {

        return acc + elem

    }, 0)

    console.log(sum)
}


getSumOfSequence(5)


const peopleWaiting = ['Кристина', 'Олег', 'Кирилл', 'Мария', 'Светлана', 'Артем', 'Глеб']

function giveParcel() {
    const splicePeopleWaiting =  peopleWaiting.slice(0, 3)
    for (let i = 0; i < splicePeopleWaiting.length; i++) {
        alert(`${splicePeopleWaiting[i]} получил(а) посылку. В очереди осталось ${(peopleWaiting.length - 1) - i} человек.`)

    }


}

giveParcel()

function leaveQueueWithoutParcel() {
    const splicePeopleWaiting =  peopleWaiting.slice(3, peopleWaiting.length)
      for (let i = 0; i < splicePeopleWaiting.length; i++) {
        alert(`${splicePeopleWaiting[i]}  не получил(а) посылку и ушел(ла) из очереди`)

      }

}

leaveQueueWithoutParcel()

const numbers = [10, 4, 100, -5, 54, 2]
let sumCubeOfNumbers1 = 0
let sumCubeOfNumbers2 = 0
let sumCubeOfNumbers3 = 0
let sumCubeOfNumbers4


for (let i = 0; i < numbers.length; i++) {
    sumCubeOfNumbers1 += numbers[i] ** 3
}
console.log('for', sumCubeOfNumbers1)

for (const number of numbers) {
    sumCubeOfNumbers2 += number ** 3
}
console.log('for of', sumCubeOfNumbers2)

numbers.forEach((number) => {
    sumCubeOfNumbers3 += number ** 3
})
console.log('forEach', sumCubeOfNumbers3)

sumCubeOfNumbers4 = numbers.reduce((acc, number) => {
    return acc + number ** 3
}, 0)

console.log('reduce', sumCubeOfNumbers4)




const coffees = ['Latte', 'Cappuccino', 'Americano']

let coffeeName = prompt('Поиск кофе по названию:')

if (coffeeName) {

    coffeeName = coffeeName.toLowerCase().trim()

   const findIndexCoffee =  coffees.findIndex((name) => name.toLowerCase() === coffeeName)

        if(findIndexCoffee !== -1) {
            alert(`Держите ваш любимый кофе ${coffees[findIndexCoffee]}. Он ${findIndexCoffee + 1}-й по популярности в нашей кофейне.`)
        }else {
            alert('К сожалению, такого вида кофе нет в наличии')
        }
}


const prices = [1.5, 1, 2]

const updatedPrices = [...prices].map((price)=> price + 0.5)

coffees.forEach((name, index) => {
    alert(`Кофе ${name} сейчас стоит ${updatedPrices[index]} евро`)
})


const clientsEstimations = []


function askClientToGiveEstimation() {
    const answerUser = +prompt('Как вы оцениваете нашу кофейню от 1 до 10?')
    if(answerUser >= 1 && answerUser <= 10) {
        clientsEstimations.push(answerUser)
    }
}

for (let i = 0; i < 5; i++){
    askClientToGiveEstimation()
}

const goodEstimations = clientsEstimations.filter((number) => number > 5).length
const notGoodEstimations = clientsEstimations.filter((number) => number <= 5).length

alert(`Всего положительных оценок: ${goodEstimations}; Всего отрицательных оценок: ${notGoodEstimations}`)


const goals = [8, 1, 1, 3, 2, -1, 5]

const numberOfGoals = []
const numbersMatch = []

const filterGoals = goals.filter((goal) => goal >= 1 && goal <= 8)

goals.forEach((goal, index) => {
    if (goal === 8) {
        alert(`Самый результативный матч был под номером ${index + 1}. В нем было забито ${goal} гол(ов).`)
    }

    if (goal >= 1 && goal < 8) {
        numberOfGoals.push(goal)
        numbersMatch.push(index + 1)
    }
})

const totalNumberOfGoals = filterGoals.reduce((acc, goal) => acc + goal)

const sortNumbersGoals = filterGoals.sort((a,b) => a - b)

alert(` Самые не результативные матчи были под номерами ${numbersMatch}. В каждом из них было забито по ${numberOfGoals} мячу(а).`)
alert(`Общее количество голов за сезон равно ${totalNumberOfGoals}`)

if(goals.indexOf(-1) === -1) {
    alert('Были автоматические поражения: нет')
}else {
    alert('Были автоматические поражения: да')
}
alert(sortNumbersGoals)




function  getMathResult(expression) {
    if( expression[1] === '+') {
        return  expression[0]   +  expression[2]
    }
    if( expression[1] === '-') {
        return  expression[0]   -  expression[2]
    }
    if( expression[1] === '*') {
        return  expression[0]   *  expression[2]
    }
    if( expression[1] === '/') {
        return  expression[0]   /  expression[2]
    }
    if(expression[1] === '>'){
        return  expression[0]   >  expression[2]
    }
    if(expression[1] === '<'){
        return  expression[0]   < expression[2]
    }

    if(expression[1] === '='){
        return  expression[0]   ===  expression[2]
    }

    if(expression[0] || expression[2]) {
       console.log('ошибка')
    }
}

console.log(getMathResult([1, '+', 2]))

const array = []
const newArray = []

for (let i = 1; i <= 5; i++) {
 array.push(i)
   for (let j = 0; j < 3; j++){
     newArray[j] = array
   }
}
console.log(newArray)

const matrix = [
    [ 1, 2, 3 ],
    [ 4, 5, 6 ],
    [ 7, 8, 9 ],
]

const newMatrix = [...matrix].join(',').split(',')

console.log(newMatrix)













