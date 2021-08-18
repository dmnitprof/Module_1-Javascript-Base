const myName = 'Дмитрий'
const programmingLanguage = 'Javascript'
const courseCreatorName = 'Владилена Минина'
const reasonText = 'нравится веб разработка, сразу видеть результат работы в браузере'
const numberOfMonth = 12

console.log(`Всем привет Меня зовут, ${myName}. Сейчас я изучаю язык программирования ${programmingLanguage} на курсе по ${programmingLanguage} у ${courseCreatorName}. Я хочу стать веб-разработчиком, потому что ${reasonText}. До этого я изучал ${programmingLanguage} ${numberOfMonth} месяцев. Я уверен, что пройду данный курс до конца!`)

let myInfoText = 'Всем привет Меня зовут, Дмитрий. Сейчас я изучаю язык программирования Javascript на курсе по Javascript у Владилена Минина. Я хочу стать веб-разработчиком, потому что нравится веб разработка, сразу видеть результат работы в браузере. До этого я изучал Javascript 12 месяцев. Я уверен, что пройду данный курс до конца!'

console.log(myInfoText.replaceAll('Javascript', 'Javascript'.toUpperCase()))
console.log('длина строки: ', myInfoText.length)
console.log('первый символ строки: ', myInfoText[0])
console.log('последний символ строки: ', myInfoText[myInfoText.length -1])

const userName = prompt('Как вас зовут?').toLowerCase().trim()
const userAge = prompt('Сколько вам лет?').trim()
alert(`Вас зовут ${userName} и вам ${+userAge} лет`)

const userString =  prompt('Введите текст для обрезки').trim()
const startSliceIndex = prompt('Введите индекс, с которого нужно начать обрезку строки')
const endSliceIndex = prompt('Введите индекс, которым нужно закончить обрезку строки')


alert(`Результат: ${userString.slice(+startSliceIndex,+endSliceIndex)}`)

let userText = prompt('Введите текст').trim()
const wordFromText = prompt('Введите слово из текста').trim()

const indexOfWord = userText.indexOf(wordFromText)
userText = userText.slice(0, indexOfWord)
console.log(userText)

const javaScriptDescription = 'JavaScript — мультипарадигменный язык программирования. Поддерживает объектно-ориентированный, императивный и функциональный стили. Является реализацией спецификации ECMAScript. JavaScript обычно используется как встраиваемый язык для программного доступа к объектам приложений.'
let string = javaScriptDescription.slice(0,  Math.floor((javaScriptDescription.length) / 2))

string = string.replaceAll('а', 'а'.toUpperCase()).trim().repeat(3)
console.log(string)
console.log( string[Math.floor(string.length / 2)])



