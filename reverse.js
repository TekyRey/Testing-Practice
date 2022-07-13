function reverseString(string) {
    if (string.length > 0 && string.length <= 10) {
        return string.split("").reverse().join("");
    }
}
console.log(reverseString("hello"))
module.exports = reverseString;
