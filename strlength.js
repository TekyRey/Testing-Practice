// function sum(a, b) {
//   return a + b;
// }
// // console.log(sum(3,5))
// module.exports = sum;

function stringLength(string) {
    if (string.length > 0 && string.length <= 10) {
        return string.length;
    }
}
console.log(stringLength("hello"))
module.exports = stringLength;

