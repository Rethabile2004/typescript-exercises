"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleUserInput(value) {
    if (typeof value === 'number') {
        console.log(value * 2);
    }
    else if (typeof value === 'string') {
        console.log(value.length);
    }
    else if (typeof value === 'boolean') {
        console.log(value);
    }
    else {
        throw Error('Please enter either a number, a string or a boolean.');
    }
}
handleUserInput('Rethabile');
//# sourceMappingURL=ex1.js.map