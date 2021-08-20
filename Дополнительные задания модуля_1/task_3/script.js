const groupBy = (arr, fn) =>
    arr.map(typeof fn === 'function' ? fn : val => val[fn])
        .reduce((acc, val, i) => {
            acc[val] = (acc[val] || []).concat(arr[i])
            return acc
        }, {})

console.log(groupBy([2.3, 2.2, 3.4], Math.floor))