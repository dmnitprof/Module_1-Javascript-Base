function isEqualSymbols(str1, str2) {
   return [...str1].sort().join() === [...str2].sort().join()

}

console.log(isEqualSymbols('адрес', 'среда')) // true