"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let scores = [85, 92, 78];
let studentInfo = ["Bob", 90];
function addScore(scores, newScore) {
    scores.push(newScore);
    return scores;
}
console.log(addScore(scores, studentInfo[1]));
//# sourceMappingURL=ex8.js.map