import {ReverseStack} from "./ReverseStack";


let reverseStack=new ReverseStack();

reverseStack.push(1)
reverseStack.push(2)
reverseStack.push(3)
reverseStack.push(4)
reverseStack.push(5)
console.log(reverseStack)

let loopTimes = reverseStack.Size();
let list: any = [];
let temp;
for (let i = 0; i < loopTimes; i++) {
    temp = reverseStack.pop()
    list.push(temp)
    console.log(list)
}
for (let i = list.length-1; i >=0; i--) {
    reverseStack.push(list[i])
}

console.log(reverseStack)


