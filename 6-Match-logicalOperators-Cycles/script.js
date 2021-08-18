// const existedUserLogin = 'the_best_user'
// const existedUserPassword = '12345678'
//
// let userLogin = prompt('Введите логин').trim()
// const userPassword = prompt('Введите пароль').trim()
//
// if(userLogin === existedUserLogin && userPassword === existedUserPassword) {
// alert(`Добро пожаловать, ${userLogin}!`)
// }else {
//     alert('Логин и (или) Пароль введены неверно!')
// }
//
// let i = 0
// while (i <3) {
//     let newStudent = prompt('Введите имя нового студента!')
//     if(newStudent) {
//         alert(`Добро пожаловать, ${newStudent}!`)
//         i +=1
//     }
// }
//
// do {
//     let newStudent = prompt('Введите имя нового студента!')
//     if(newStudent) {
//         alert(`Добро пожаловать, ${newStudent}!`)
//         i += 1
//     }
// } while (i < 3)
// let sum = 0
// for (let i = 1 ; i <= 100; i++) {
//    sum += i
// }
// alert(sum)
//
//
// const questions = [
//     'Сколько будет 2 + 2?',
//     'Сколько будет 2 * 2?',
//     'У Пети было 5 яблок. 3 из них он съел, 1 отдал другу. Сколько яблок у Пети осталось?',
//     'У Маши было 10 конфет. 2 она съела, 1 отдала другу. После мама дала Маше еще 5 конфет. Сколько в итоге конфет осталось у Маши?',
//     'Сколько будет 2 + 2 * 2?'
// ]
//
// const answers = [4, 1, 12, 6]
//
//
// let correctAnswers = 0
// let incorrectAnswers = 0
// let prompts
//
//
// for (let i = 0; i < questions.length; i++) {
//
//     prompts = prompt(questions[i])
//
//     let currentQuestion = (questions.length + i) - questions.length
//
//     if (currentQuestion === 0 && +prompts === answers[0]) {
//         correctAnswers++
//         alert('верно')
//     } else if (currentQuestion === 1 && +prompts === answers[0]) {
//         correctAnswers++
//         alert('верно')
//     } else if (currentQuestion === 2 && +prompts === answers[1]) {
//         correctAnswers++
//         alert('верно')
//     } else if (currentQuestion === 3 && +prompts === answers[2]) {
//         correctAnswers++
//         alert('верно')
//     } else if (currentQuestion === 4 && +prompts === answers[3]) {
//         correctAnswers++
//         alert('верно')
//     } else {
//         incorrectAnswers++
//         alert('не верно')
//     }
//     if (currentQuestion === questions.length - 1) {
//         alert(`Конец теста!\n Правильные ответы -
//         ${correctAnswers};\n Неправильные ответы -
//         ${incorrectAnswers}`)
//     }
// }
//
//
//
//
//
// const clientName = prompt('Введите имя клиента')
// let clientSpentForAllTime = +prompt('Сколько клиент потратил за все время?')
// let clientSpentToday = +prompt('Сколько клиент потратил сегодня?')
// let discount = 0;
//
// if (clientSpentForAllTime && clientSpentToday) {
//     if (clientSpentForAllTime >= 100 && clientSpentForAllTime <= 300) {
//         discount = 10
//         alert(`Вам предоставляется скидка в ${discount}%!”`)
//     } else if (clientSpentForAllTime > 300 && clientSpentForAllTime <= 500) {
//         discount = 20
//         alert(`Вам предоставляется скидка в ${discount}%!”`)
//     } else if (clientSpentForAllTime > 500) {
//         discount = 30
//         alert(`Вам предоставляется скидка в ${discount}%!”`)
//     }
//
//     clientSpentForAllTime += clientSpentToday
//     clientSpentToday = clientSpentToday - (clientSpentToday / 100) * discount
//
//     alert(`Спасибо, ${clientName}! К оплате ${clientSpentToday}$. За все время в нашем ресторане вы потратили ${clientSpentForAllTime}$.`)
//
// } else {
//     alert('Сумма, которую клиент потратил за все время и которую потратил сегодня, должна быть числом! Перезагрузите страницу, чтобы повторить попытку...')
// }


let userPassword = '11w'
let errors = ''
let notErrors = ''
let flag = false
userPassword = userPassword.toUpperCase()

for (let i = 0; i < userPassword.length; i++) {
   let arrPassword = userPassword[i]
    // if(NaN(userPassword[i])) {
    //     userPassword[i] = +userPassword[i]
    // }else {
    //     userPassword[i].toString()
    // }
    // console.log(arrPassword)

    if(userPassword.length < 3 || userPassword.length > 20) {
        errors += 'пароль не соответвует правилам'
        if(userPassword  === userPassword.toLowerCase()){
            errors += ' , нет большой буквы'
        }else if(!isNaN(userPassword[i])) {
            errors += 'нет цифры'
        }
    }else {
        errors = 'пароль подходит, есть большая буква'
    }

}

document.querySelector('#app').innerHTML = `
<hr/>
<div>${userPassword}</div>
<hr/>
<div>${errors}</div>
<hr/>
<div>${notErrors}</div>
<hr/>
`







// if(userPassword) {
//     userPassword.toUpperCase().trim()
//     if(!isNaN(userPassword))
//     for (let i = 0; i < userPassword.length; i++) {
//         if (userPassword.length < 3 || userPassword.length > 20 &&
//             userPasswordArray[i].toUpperCase() === userPassword[i].toLowerCase()) {
//             userPasswordArray.push(userPassword[i])
//             console.log(userPasswordArray)
//             console.log('Пароль валидный. Добро пожаловать в аккаунт!')
//         }  else {
//             console.log('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
//
//         }
//
//     }
// }


//     if (!isNaN(userPassword)) {
//         userPassword = +userPassword
//
//         console.log('цифры :', typeof userPassword, userPassword)
//
//     } else {
//
//         console.log('буквы :', typeof userPassword, userPassword , ' length :', userPassword.length)
//     }
// }

//     userPassword = Number(userPassword)
//     console.log(typeof userPassword, userPassword)
// } else if(isNaN(userPassword)){
//     userPassword = String(userPassword)
//     console.log( typeof userPassword, userPassword)
// }else  {
//     userPassword = String(userPassword)
//     console.log(typeof userPassword, userPassword)
// }

//     if (userPassword.length < 3 || userPassword.length > 20) {
//         console.log(userPassword)
//         console.log('Пароль не удовлетворяет условиям! Перезагрузите страницу и попробуйте ввести его еще раз.')
//     } else {
//         console.log(userPassword)
//         console.log('Пароль валидный. Добро пожаловать в аккаунт!')
//     }
// } else if (userPassword === null) {
//     console.log(' "отменено"')
// } else {
//     console.log('Пароль не может быть пустым')
// }





