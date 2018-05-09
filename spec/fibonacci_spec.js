const fibonacci = require("../lib/fibonacci")

describe("fibonacci", ()=> {

    it("should return 1 when input 1", ()=> {
        expect(fibonacci(1)).toBe(1)
    })

    it("should return 1 when input 2", ()=> {
        expect(fibonacci(2)).toBe(1)
    })

    it("should return 2 when input 3", ()=> {
        expect(fibonacci(3)).toBe(2)
    })

    it("should return 3 when input 4", ()=> {
        expect(fibonacci(4)).toBe(3)
    })
})