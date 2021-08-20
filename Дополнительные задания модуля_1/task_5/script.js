let userDate = prompt('введите дату в формате  "dd.mm.yyyy"')
const userEvent = prompt('введите название события')
const dateBeforeEvent = document.querySelector('.date')
const eventUser = document.querySelector('.eventUser')

function getDate(userDate) {
    if (userDate) {
        userDate = userDate.split('.')
        userDate = `${userDate[1]}/${userDate[0]}/${userDate[2]}`
        const t = Date.parse(userDate) - Date.parse(new Date().toString())
        const seconds = Math.floor((t / 1000) % 60)
        const minutes = Math.floor((t / 1000 / 60) % 60)
        const hours = Math.floor((t / (1000 * 60 * 60)) % 24)
        const days = Math.floor(t / (1000 * 60 * 60 * 24))
        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }

    }
}

function renderDate() {
    if (userDate && userEvent) {
        const t = getDate(userDate)
        eventUser.innerHTML = `
       <h2>Осталось до события: <strong style="color: green">${userEvent}</strong> (${userDate})</h2>
`
        dateBeforeEvent.innerHTML = `
      <span>Дней: ${t.days}</span>,
      <span>часов: ${t.hours}</span>,
      <span>минут: ${t.minutes = t.minutes < 10 ? '0' + t.minutes : t.minutes}</span>,
      <span>секунд: ${t.seconds = t.seconds < 10 ? '0' + t.seconds : t.seconds}</span>
        `
        if (t.total <= 0) {
            clearInterval(timeInterval)
        }

    } else {
        dateBeforeEvent.innerHTML = `
        <h1 style="color: red">Вы не ввели дату или событие,<br/> 
        либо дата не соотвествует формату "dd.mm.yyyy"</h1>
        <h2>Перезагрузите страницу и повторите ввод.</h2>
        `
    }
}

const timeInterval = setInterval(renderDate, 1000)


