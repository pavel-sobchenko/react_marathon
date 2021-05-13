const concat = (hello: string, world: string): string => [hello, world].join(' ');

interface SimeArray extends Array<string|number> {}

interface HomeTask {
    howIDoIt: string;
    simeArray: SimeArray;
    widthData: Array<{howIDoIt: string, simeArray: SimeArray}>
}

const myHometask: HomeTask = {
    howIDoIt: "I Do it well",
    simeArray: ["string one", "string two", 42],
    widthData: [{ howIDoIt: "I Do it well" , simeArray : ["string one", 23] }]
};

interface MyArray<T> {
    [N: number] : T;
    map(fn: (el: T) => T): T[];
    reduce<U>(fn: (prev: U, cur: T) => T, init: U): U;
}

const arr: MyArray<number> = [1,2,3,4,5];
// arr.reduce((a,b) => a + b, 0);
// arr.map((i) => i + 10);

export default {concat, arr, myHometask};


