"use strict";
exports.__esModule = true;
var ReverseStack_1 = require("./ReverseStack");
var reverseStack = new ReverseStack_1.ReverseStack();
reverseStack.push(1);
reverseStack.push(2);
reverseStack.push(3);
reverseStack.push(4);
reverseStack.push(5);
console.log(reverseStack);
var loopTimes = reverseStack.Size();
var list = [];
var temp;
for (var i = 0; i < loopTimes; i++) {
    temp = reverseStack.pop();
    list.push(temp);
    console.log(list);
}
for (var i = list.length - 1; i >= 0; i--) {
    reverseStack.push(list[i]);
}
console.log(reverseStack);
