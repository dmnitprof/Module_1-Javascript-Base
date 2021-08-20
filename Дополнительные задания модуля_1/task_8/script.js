const isPalindrome = str => str === str.split('').reverse().join('')

console.log(isPalindrome('racecar')) // true
console.log(isPalindrome('programmer')) // false