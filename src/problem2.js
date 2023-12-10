"use strict";
// Write a JavaScript/TypeScript function that reverses a given string
// Using decorator
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function p2_split(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        // args[0] = args[0].split("");
        // originalMethod.apply(this, args);
        const [arg] = args;
        const argSplitted = arg.split("");
        originalMethod.apply(this, [argSplitted]);
    };
}
function p2_reverse(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const [arg] = args;
        const argSplitted = arg.reverse();
        originalMethod.apply(this, [argSplitted]);
    };
}
function p2_join(target, propertyKey, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const [arg] = args;
        const argSplitted = arg.join("");
        originalMethod.apply(this, [argSplitted]);
    };
}
class p2_StringManager {
    print(str) {
        // SPLIT
        // REVERSE
        // JOIN
        console.log(str);
    }
}
__decorate([
    p2_split,
    p2_reverse,
    p2_join
], p2_StringManager.prototype, "print", null);
const p2_stringManager = new p2_StringManager();
stringManager.print("hello");
