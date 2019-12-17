import {fibonacci} from "./math";

test('should get 1 for the index 2', ()=>{
    expect(fibonacci(2)).toBe(1);

});

test('should get 13 for the number 7', ()=>{
    expect(fibonacci(100)).toBe(354224848179262000000);

});
