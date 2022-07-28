const numbers = [1, 2, 3, 4, 5, 6]

const numbersV2 =numbers.map(el=> el * 2)

console.log(numbers, numbersV2)

const students = [
    {name:'Paty', score:6.4},
    {name:'Wilson', score:8.6},
    {name:'Thiago', score:9.4},
    {name:'Ester', score:9.1},
]

const getScore = el => el.score

const result = students
    //aparece as notas dos alunos
    .map(getScore)
    //arrendonda notas para cima
     .map(Math.ceil)

     //arredonda as notas ppara baixo
    // .map(Math.floor)
    console.log(students, result)