// Write a simple calculator class or object, which will have 4 methods: add, subtract, divide, and multiply.
let calculator = []
calculator.add = function (a, b) {
    return a + b;
}
calculator.subtract = function (a, b) {
    return a - b;
}
calculator.divide = function (a, b) {
    return a / b;
}
calculator.multiply = function (a, b) {
    return a * b;
}
console.log(calculator.add(3, 5))
console.log(calculator.subtract(3, 5))
console.log(calculator.divide(3, 5))
console.log(calculator.multiply(3, 5))
module.exports = calculator;