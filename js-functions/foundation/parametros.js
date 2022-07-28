function logParams(a, b, c) {
    console.log(a, b, c)
}

logParams(1, 2, 3, 4, 5)
logParams(1, 2, 3)
logParams(1, 2)

function defaultParams(a = 1, b = 2, c = 0) {
    console.log(a, b, c)
}
defaultParams(7, 8, 9)
defaultParams(7, 8)
defaultParams(7)
defaultParams()

console.log(1)
console.log(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

//spred/rest
function logNums(...nums) {
    console.log(nums)
}
logNums(1, 2, 3, 4, 5, 6)


function sumAll(...nums) {
    let total = 0
    for (let n of nums) {
        total += n
    }
    return total
}
console.log(sumAll(1, 2, 3, 4, 5, 6, 7, 8, 9, 10))