const oddSort = (array) => {

    array.forEach((value, idx) => {
        if (value % 2 === 1) {
            let sortNumber = value

            for (let i = 0; i < idx; i++) {
                if (array[i] % 2 === 1) {
                    if (array[i] > sortNumber) {
                        const temp = sortNumber

                        sortNumber = array[i]
                        array[i] = temp
                    }
                }
            }

            array[idx] = sortNumber
        }
    })

    return array
}
console.log(oddSort([7, 3, 4, 9, 5, 2, 17])) // => [3, 5, 4, 7, 9, 2, 17]
