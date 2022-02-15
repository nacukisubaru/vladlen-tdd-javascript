let MyPromise = require("./promise");

describe("Promise:", () => {
    let promise;
    let executorSpy; 
    
    beforeEach(() => {
        executorSpy = jest.fn(() => {});
        promise = new MyPromise(executorSpy);
    });

    test("should exist and to be typeof function", () => {
        expect(MyPromise).toBeDefined();
        expect(typeof MyPromise).toBe("function");
    });

    test("instance should have methods: then, catch, finally", () => {
        expect(promise.then).toBeDefined();
        expect(promise.catch).toBeDefined();
        expect(promise.finally).not.toBeUndefined();
    });

    test("should call executor function", () => {
        expect(executorSpy).toHaveBeenCalled();
    });
});
