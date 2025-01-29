module.exports = {
    add,
    subtract,
    multiply,
    divide,
    modulas,
    power,
    squareRoot,
    floor,
    ceiling,
} = require("../lab-TDD-starter");
const { describe, test } = require("node: test");
const assert = require("node:assert");

describe("Lab-TDD tests", () => {
    describe("Add function tests", () => {
         test("Add function should return 8 when adding 5 and 3" , () => {
            assert.strictEqual(add(3, 5), 8)
    });
        test ("Add function should return 0 when adding -5 and 5", () => {
            assert.strictEqual(add(-5, 5), 0);
        });
});
describe("Divide function tests", () => {
    test("Divide function should return 4 when dividing 32 over 8",
        assert.strictEqual(divide(32, 8), 4));
});
test("Zero division should throw and error", () => {
    assert.throws(divide(10, 0),)

});


describe("Substract function tests", () =>{
    test("Substract function should return 5 when substracting 10 and 5" , () => {
        assert.strictEqual(subtract(10,5), 5)
    });

    test("Substract function should return 12 when substracting 20 and 8", () => {
        assert.strictEqual(substract(20, 8), 12);
    });
});


describe("Multiply function test", () =>{
    test("Multiply function should return 18 when multiplying 6 and 3", () => {
        assert.strictEqual(multiply(6, 3), 18);
    });

    test("Multiply function should return 12 when multiplying 3 and 4", () => {
        assert.strictEqual(multiply(3, 4), 12);
    });
});

describe("Power function test", () => {
    test("Power function should return 25 when raising 5 to the power of 2", () => {
        assert.strictEqual(pow(5,2), 25);
    });
    
    test ("Power function should return 8 when raising 2 to the power of 3", () => {
        assert.strictEqual(pow(2, 3), 8);
    });
});

describe("Floor function test", () => {
    test("Floor function should return 3 for 3.7", () => {
        assert.strictEqual(floor(3.7), 3);
    });
    
    test ("Floor function should return 7 for 7.6", () => {
        assert.strictEqual(floor(7.6), 7);
    });
});

describe("Square function test", () => {
    test("Square function should return 16 when squaring  4", () => {
        assert.strictEqual(sqrt(4), 16);
    });
    
    test ("Square function should return 4 when squaring 2", () => {
        assert.strictEqual(sqrt(2), 4);
    });
});

describe("Ceiling function test", () => {
    test("Ceiling function should return 6 for 5.3", () => {
        assert.strictEqual(ceil(5.3), 6);
    });
    
    test ("Ceiling function should return 8 for 7.2", () => {
        assert.strictEqual(ceil(7.2),8);
    });
});

describe("Modulas function tests", () => {
    test("Modulas function should return 1 when dividing 5 over 2", () => {
        assert.strictEqual(modulas(5, 2), 1);
    });

    test("Modulas function should return 2 when dividing 8 over 3", () => {
        assert.strictEqual(modulas(8, 3), 2);
    });
});




});