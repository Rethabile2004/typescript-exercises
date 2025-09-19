"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Day;
(function (Day) {
    Day[Day["Monday"] = 1] = "Monday";
    Day[Day["Tuesday"] = 2] = "Tuesday";
    Day[Day["Wednesday"] = 3] = "Wednesday";
    Day[Day["Thursday"] = 4] = "Thursday";
    Day[Day["Friday"] = 5] = "Friday";
    Day[Day["Saturday"] = 6] = "Saturday";
    Day[Day["Sunday"] = 7] = "Sunday";
})(Day || (Day = {}));
function checkIfItsSaturdayOrSunday(value) {
    return value === Day.Saturday || value === Day.Sunday;
}
console.log(checkIfItsSaturdayOrSunday(Day.Sunday));
//# sourceMappingURL=ex12.js.map