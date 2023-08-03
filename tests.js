// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

//Unit test for sayHello function
describe('sayHello', function () {
    it('should defined function', function () {
        expect(typeof sayHello).toBe("function")
    });
    it('should return a string when called', function () {
        expect(typeof sayHello()).toBe("string")
    });
    it('should not return no name', function () {
        expect(sayHello()).not.toBe("")
    });
    it('should return "Hello, Clifford!', function () {
        expect(sayHello("Clifford")).toBe("Hello, Clifford!")
    });
    it('should return "Hello, Wifey!"', function () {
        expect(sayHello("Wifey")).toBe("Hello, Wifey!")
    });
    it('should return "Hello, Alex!"', function (){
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should return "Hello, World!', function () {
        expect(sayHello()).toBe("Hello, World!")
    });
    it('should return "Hello, World!', function () {
        expect(sayHello(true)).toBe("Hello, World!")
    });
    it('should return "Hello, World!', function () {
        expect(sayHello(false)).toBe("Hello, World!")

    });
});
describe("isFive", function (){
    it('should be a defined function', function () {
        expect(isFive).toBe(isFive)//shows it's a function
    });
    it('should return boolean', function () {
        expect(typeof isFive()).toBe("boolean")
    });
    it("should return true if 5", function (){
        expect(isFive(5)).toBe(true)
    })
    it('should return true if "5"', function () {
        expect(isFive("5")).toBe(true)
    });
})
describe('isEven', function () {
    it('should be defined', function () {
        expect(typeof isEven).toBe("function")
    });
    it('should return boolean', function () {
        expect(typeof isEven()).toBe("boolean")
    });
    it('should return true when 2', function () {
        expect(isEven(2)).toBe(true)
    });
    it('should return true when -4', function () {
        expect(isEven(-4)).toBe(true)
    });
    it('should return false when 3', function () {
        expect(isEven(3)).toBe(false)
    });
    it('should return false when "banana"', function () {
        expect(isEven("banana")).toBe(false)
    });
    it('should return true when "8"', function () {
        expect(isEven("8")).toBe(true)
    });
    it('should return false when Infinity', function () {
        expect(isEven(Infinity)).toBe(false)
    });
    it('should return false when true', function () {
        expect(isEven(true)).toBe(false)
    });
    it('should return false when false', function () {
        expect(isEven(false)).toBe(false)
    });
    it('should return false when ""', function () {
        expect(isEven("")).toBe(false)
    });
});