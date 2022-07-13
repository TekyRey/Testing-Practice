const strLength = require("./strlength");
const stringReverse = require("./reverse");
const calculator = require("./calculator");
// test stringLength function with jest dynamically
test("stringLength function with jest dynamically", () => {
    expect(strLength("hello")).toBe(5);
}
);
// test stringReverse function with jest dynamically
test("stringReverse function with jest dynamically", () => {
    expect(stringReverse("hello")).toBe("olleh");
}
);

// test calculator function with jest using describe
describe("calculator function with jest using describe", () => {
    test("calculator function with jest dynamically", () => {
        expect(calculator.add(3, 5)).toBe(8);
        expect(calculator.subtract(3, 5)).toBe(-2);
        expect(calculator.divide(3, 5)).toBe(0.6);
        expect(calculator.multiply(3, 5)).toBe(15);
    }
        
    );
    
});
