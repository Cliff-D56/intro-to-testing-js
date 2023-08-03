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