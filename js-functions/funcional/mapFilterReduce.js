const students = [
    {name:'Paty', score:6.4},
    {name:'Wilson', score:8.6},
    {name:'Thiago', score:9.4},
    {name:'Ester', score:9.1},
]

const greateStudent = student => student.score >= 9
const getScore = el => el.score
const avg = (acc, el, i, array) => {
    if (i === array.length -1) {
        return (acc + el) / array.length
    }else{
        return acc + el
    }
}
console.log(
students
.filter(greateStudent)
.map(getScore)
.reduce(avg)
)


