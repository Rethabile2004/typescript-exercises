"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateArea(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else {
        return shape.width * shape.height;
    }
}
const circle = { kind: "circle", radius: 5 };
const rectangle = { kind: "rectangle", width: 4, height: 6 };
console.log(calculateArea(circle));
console.log(calculateArea(rectangle));
//# sourceMappingURL=ex16.js.map