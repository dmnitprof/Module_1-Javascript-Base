function getDateFormat(date, separator = '.') {
    const year = date.getFullYear()
    const month = date.getMonth()
    console.log(month)
    const day = date.getDate()
    console.log(day)

    return `${day < 10 ? '0' + day : day}${separator}${(month < 10 ? '0' + month : month) +1}${separator}${year}`
}

console.log(getDateFormat(new Date(2020, 0, 30), '-'))





















































