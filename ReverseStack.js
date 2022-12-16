"use strict";
exports.__esModule = true;
exports.ReverseStack = void 0;
var ReverseStack = /** @class */ (function () {
    function ReverseStack() {
        this.container = [];
    }
    ReverseStack.prototype.pop = function () {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.container.pop();
    };
    ReverseStack.prototype.push = function (item) {
        if (this.isFull()) {
            throw new Error("Stack is full");
        }
        this.container.push(item);
    };
    ReverseStack.prototype.isEmpty = function () {
        return this.container.length == 0;
    };
    ReverseStack.prototype.isFull = function () {
        return this.container.length == this.size;
    };
    ReverseStack.prototype.Size = function () {
        return this.container.length;
    };
    return ReverseStack;
}());
exports.ReverseStack = ReverseStack;
