import { ArrayStack } from './index'

const numberList = new ArrayStack<number>();

numberList.push(5);
numberList.push(8);
numberList.push(9);



numberList.pop();

console.log(`teste`, numberList);