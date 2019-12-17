//0, 1, 1, 2, 3, 5, 8, 13, 21
// const fibonacci = (index: number): number => {
//     if (index <= 2) {
//         return 1;
//     } else {
//         return fibonacci(index - 1) + fibonacci(index - 2);
//     }
// };

const fibonacci = (index: number, prevValue: Array<number> = []): number => {
    if (prevValue[index]) {
        return prevValue[index];
    }
    let result: number = 0;
    if (index <= 2) {
        result = 1;
    } else {
        result = fibonacci(index - 1, prevValue) + fibonacci(index - 2, prevValue);
    }
    prevValue[index] = result;
    return result;
};

export {fibonacci}