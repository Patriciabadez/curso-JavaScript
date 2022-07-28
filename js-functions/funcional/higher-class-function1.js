function run (fn) {
    return `Result: ${fn()}`
}
function sayHell() {
    console.log('Hello!!')
}
run(sayHell)

run(function() {
    console.log('run!!')
})

const result = run(Math.random)
console.log(result)