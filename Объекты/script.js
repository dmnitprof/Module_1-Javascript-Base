// const users = [
//
//     {
//
//         username: 'David',
//
//         status: 'online',
//
//         lastActivity: 10
//
//     }, {
//
//         username: 'Lucy',
//
//         status: 'offline',
//
//         lastActivity: 22
//
//     }, {
//
//         username: 'Bob',
//
//         status: 'online',
//
//         lastActivity: 104
//
//     }
//
// ]
//
// const onlineUsers = Object.values({...users}).filter(user => user.status === 'online')
//
// const usersOnlineNames = onlineUsers.map(user => user.username).join(', ')
//
// console.log(`Сейчас в онлайн следующие пользователи: ${usersOnlineNames}`)

// const student = {
//
//     fullName: 'Максим',
//
//     experienceInMonths: 12,
//
//     stack: ['HTML', 'CSS', 'JavaScript', 'React'],
//
// }
//
// function giveJobToStudent(student, jobName) {
//
//     student.jobName = jobName
//     alert(`Поздравляем! У студента ${Object.values(student.fullName).join('')} появилась новая работа! Теперь он ${jobName}`)
//     return student
// }
//
// const updatedStudent = giveJobToStudent(student, 'веб-разработчик')
//
// console.log(updatedStudent)


// const student = {
//     name: 'Maxim',
//     programmingLanguage: 'JavaScript',
// }
//
//
// function handleObject(obj, key, action) {
//     if (action === 'get') {
//         return obj.key = key
//     } else if (action === 'add') {
//         obj.key = ''
//         return obj
//     } else if (action === 'delete') {
//         delete obj.key
//         return obj
//
//     } else {
//         return obj
//     }
//
// }
//
// const result = handleObject(student, 'programmingLanguage', 'get')
//
// console.log('result', result)


// function  getKiller(suspectInfo,deadPeople) {
//     console.log(deadPeople.join(', '))
//
//    return  Object.entries(suspectInfo).filter((people, index) => people[index] === deadPeople[index])
//
//
//
// }
//
// console.log (getKiller(
//     {
//         'James': ['Jacob', 'Bill', 'Lucas'],
//         'Johnny': ['David', 'Kyle', 'Lucas'],
//         'Peter': ['Lucy', 'Kyle'],
//     }, ['Lucas', 'Bill']
// ))

function getWinner(applicants, winnerObject) {
    Object.keys(applicants).forEach( (key, index) => {
        console.log(index)
        const test = getRandomNumberInRange(index,+key)
        console.log(test)

    })

    return {
        ...winnerObject,
        ...applicants
    }
}

function getRandomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min)) + min
}

const todaysWinner = {
    prize: '10 000$',
}

const winnerApplicants = {
    '001': {
        name: 'Максим',
        age: 25,
    },
    '201': {
        name: 'Светлана',
        age: 20,
    },
    '304': {
        name: 'Екатерина',
        age: 35,
    },
}

const resultWinner = getWinner(winnerApplicants, todaysWinner)
console.log('resultWinner', resultWinner)




























































