const numbers = [1, 2, 3, 4, 5, 6]

const greaterThanZero = el => el > 0
const greaterThanTen = el => el > 10
const even = el => el % 2 === 0

console.log(numbers.filter(el => el > 0))

console.log(numbers.filter(greaterThanZero))
console.log(numbers.filter(greaterThanTen))
console.log(numbers.filter(even))

const students = [
    {name:'Paty', score:6.4},
    {name:'Wilson', score:8.6},
    {name:'Thiago', score:9.4},
    {name:'Ester', score:9.1},
]

const greateStudent = student => student.score >= 9
console.log(students.filter(greateStudent))
console.log(students)

   