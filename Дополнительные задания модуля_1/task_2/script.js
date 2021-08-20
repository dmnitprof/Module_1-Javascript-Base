function getNumber() {
    let numbers = []

    for (let i = 1016; i <= 1937; i + 1) {
        numbers.push(i++)


    }
    const test = numbers.filter(value =>
        value % 3 === 0 && value % 7 === 0
        && value % 5 !== 0 && value % 2 !== 0)
    console.log(Math.max(...test)) // 1911

}

getNumber()