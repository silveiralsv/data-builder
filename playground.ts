import { ArrayStack } from '@dois2/data-builder'

const numberList = new ArrayStack<number>();

numberList.push(5);
numberList.push(8);
numberList.push(9);

console.log(numberList.size());
console.log(numberList.items.toString());

numberList.pop();

console.log(numberList);